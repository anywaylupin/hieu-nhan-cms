import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const n2m = new NotionToMarkdown({ notionClient: notion });

export const getPostList = async () => {
  try {
    const response = await fetch(NEXT_PUBLIC_BASE_URL + '/api/posts');

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data: CustomPageObjectResponse[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

export const getPostById = async (id: string) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/posts/${id}`, { method: 'GET' });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data: CustomPageMarkdownResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

type DatabasePropertyConfigResponse = PageObjectResponse['properties'][string];

type ExtractDatabasePropertyConfig<T extends DatabasePropertyConfigResponse['type']> = Extract<
  DatabasePropertyConfigResponse,
  { type: T }
>;

export type CustomPageObjectResponse = PageObjectResponse & {
  properties: {
    ID: ExtractDatabasePropertyConfig<'unique_id'>;
    Date: ExtractDatabasePropertyConfig<'date'>;
    Name: ExtractDatabasePropertyConfig<'title'>;
    Published: ExtractDatabasePropertyConfig<'checkbox'>;
    Tags: ExtractDatabasePropertyConfig<'multi_select'>;
  };
};

export type CustomPageMarkdownResponse = CustomPageObjectResponse & { markdown: { parent: string } };
