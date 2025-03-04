import {
  DatabaseObjectResponse,
  PropertyItemObjectResponse,
  RichTextItemResponse
} from '@notionhq/client/build/src/api-endpoints';

import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { fetchFromApi, formatDate } from './utils';

export const notion = new Client({ auth: process.env.NOTION_TOKEN });

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getBlogPosts = () => fetchFromApi<CustomDatabaseObjectResponse[]>('/api/posts');

export const getBlogPostById = (id: string) => fetchFromApi<CustomDatabaseObjectResponse>(`/api/posts/${id}`);

export const getPostContent = async (id: string) => {
  try {
    const mdBlocks = await n2m.pageToMarkdown(id);
    return n2m.toMarkdownString(mdBlocks);
  } catch (error) {
    console.error(`Failed to get content for post ${id}:`, error);
    return null;
  }
};

export const getPostProperties = (post: CustomDatabaseObjectResponse) => {
  const image = post.cover?.type === 'external' ? post.cover.external.url : post.cover?.file.url;
  const title = post.properties.Name.title?.[0]?.plain_text || 'Untitled';
  const content = post.properties.Content.rich_text.map((r) => r.plain_text).join('\n');
  const description = post.description?.[0]?.plain_text || content;
  const date = formatDate(post.properties.Date.date?.start ?? post.created_time);
  const tags = post.properties.Tags.multi_select;

  return { image, description, title, content, date, tags };
};

type ExtractPropertyConfig<T extends PropertyItemObjectResponse['type']> = Extract<
  PropertyItemObjectResponse,
  { type: T }
>;

export type CustomDatabaseObjectResponse = DatabaseObjectResponse & {
  properties: {
    Name: ExtractPropertyConfig<'title'> & { title: RichTextItemResponse[] };
    Content: ExtractPropertyConfig<'rich_text'> & { rich_text: RichTextItemResponse[] };
    Published: ExtractPropertyConfig<'checkbox'>;
    Date: ExtractPropertyConfig<'date'>;
    Tags: ExtractPropertyConfig<'multi_select'>;
  };
};
