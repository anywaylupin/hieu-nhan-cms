import { n2m, notion } from '@/lib/notion';
import { NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';

const CACHE_KEY = 'notion-post-';
const CACHE_DURATION = 600;

async function fetchPost(id: string) {
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

  return { ...response.results[0], markdown: mdString };
}

export async function GET(_request: Request, { params }: BlogRequest) {
  const { id } = await params;

  try {
    const cachedFetchPost = unstable_cache(fetchPost, [`${CACHE_KEY}${id}`], { revalidate: CACHE_DURATION });

    const result = await cachedFetchPost(id);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
