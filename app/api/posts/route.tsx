import { NextResponse } from 'next/server';
import { notion } from '@/lib/notion';

export const GET = async () => {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Published',
        checkbox: { equals: true }
      }
    });

    return NextResponse.json(response.results);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
};
