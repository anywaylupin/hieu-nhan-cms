import { n2m, notion } from '@/lib/notion';

import { NextResponse } from 'next/server';
import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

const cache = new Map<string, { data: QueryDatabaseResponse['results'][number]; timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 60;

export async function GET(_request: Request, { params }: BlogRequest) {
  const { id } = await params;
  const cacheKey = `post-${id}`;
  const now = Date.now();

  // Check if the cache has the post and is still valid
  if (cache.has(cacheKey)) {
    const cachedData = cache.get(cacheKey)!;
    if (now - cachedData.timestamp < CACHE_DURATION) {
      return NextResponse.json(cachedData.data, { status: 200 });
    }
  }

  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID is not set. Please set it in your environment variables.');
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: { and: [{ property: 'ID', unique_id: { equals: Number(id) } }] },
      page_size: 1
    });

    if (response.results.length === 0) {
      throw new Error('Notion page not found with the given ID. Please check the ID and try again.');
    }

    const mdBlocks = await n2m.pageToMarkdown(response.results[0].id);
    const mdString = n2m.toMarkdownString(mdBlocks);
    const result = { ...response.results[0], markdown: mdString };

    // Cache the result
    cache.set(cacheKey, { data: result, timestamp: now });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
