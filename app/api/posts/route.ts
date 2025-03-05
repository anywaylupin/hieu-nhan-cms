import { NextResponse } from 'next/server';
import { notion } from '@/lib/notion';
import { unstable_cache } from 'next/cache';

const CACHE_KEY = 'notion-posts';
const CACHE_DURATION = 600;

async function fetchPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) {
    throw new Error('NOTION_DATABASE_ID is not set. Please set it in your environment variables.');
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: { and: [{ type: 'checkbox', property: 'Published', checkbox: { equals: true } }] },
    page_size: 100
  });

  return response;
}

export async function GET() {
  try {
    const cachedFetchPosts = unstable_cache(fetchPosts, [CACHE_KEY], { revalidate: CACHE_DURATION });

    const response = await cachedFetchPosts();

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
