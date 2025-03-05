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

    const data = await response.json();
    return data.results as CustomPageObjectResponse[];
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
    return {} as CustomPageMarkdownResponse;
  }
};

export const getPostDetail = (post: CustomPageObjectResponse | CustomPageMarkdownResponse) => {
  return {
    id: post.properties.ID.unique_id.number,
    title: post.properties.Title.title?.[0]?.plain_text ?? 'Untitled',
    description: post.properties.Description.rich_text?.[0]?.plain_text,
    published: post.properties.Published.checkbox,
    date: post.properties.Date.date?.start ?? post.created_time,
    tags: post.properties.Tags.multi_select.map((tag) => tag.name),
    images: post.properties.Images.files
  };
};

export const getPostImage = (image?: ExtractDatabasePropertyConfig<'files'>['files'][number]) => {
  switch (image?.type) {
    case 'external':
      return { url: image.external.url, alt: image.name };
    case 'file':
      return { url: image.file.url, alt: image.name };
    default:
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
    Title: ExtractDatabasePropertyConfig<'title'>;
    Description: ExtractDatabasePropertyConfig<'rich_text'>;
    Published: ExtractDatabasePropertyConfig<'checkbox'>;
    Date: ExtractDatabasePropertyConfig<'date'>;
    Tags: ExtractDatabasePropertyConfig<'multi_select'>;
    Images: ExtractDatabasePropertyConfig<'files'>;
  };
};

export type CustomPageMarkdownResponse = CustomPageObjectResponse & { markdown: { parent: string } };
