import { NextResponse } from 'next/server';
import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { notion } from '@/lib/notion';

let cachedPosts: QueryDatabaseResponse | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 1000 * 60 * 60;

export async function GET() {
  try {
    const now = Date.now();

    if (cachedPosts && now - lastFetchTime < CACHE_DURATION) {
      return NextResponse.json(cachedPosts, { status: 200 });
    }

    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID is not set. Please set it in your environment variables.');
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: { and: [{ type: 'checkbox', property: 'Published', checkbox: { equals: true } }] },
      page_size: 100
    });

    cachedPosts = response;
    lastFetchTime = now;

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
