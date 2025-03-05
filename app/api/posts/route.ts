import { NextResponse } from 'next/server';
import { notion } from '@/lib/notion';

export async function GET() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID is not set. Please set it in your environment variables.');
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: { and: [{ type: 'checkbox', property: 'Published', checkbox: { equals: true } }] },
      page_size: 100
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
