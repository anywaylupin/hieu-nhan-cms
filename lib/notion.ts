import { DEFAULT_PAGE_SIZE, ERROR_CODE, NOTION_DATABASE_ID, NOTION_TOKEN } from './constants';
import { PageObjectResponse, QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: NOTION_TOKEN });

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getBlogPosts = async (config: {
  filter: QueryDatabaseParameters['filter'];
  pageSize?: number;
  nextCursor?: string;
}) => {
  const { filter, nextCursor } = config;
  const { pageSize } = config;

  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter,
    page_size: pageSize ?? DEFAULT_PAGE_SIZE,
    start_cursor: nextCursor
  });

  return response.results as CustomDatabaseObjectResponse[];
};

export const getPageById = async (id: number) => {
  const posts = await getBlogPosts({ filter: { and: [{ property: 'ID', unique_id: { equals: id } }] }, pageSize: 1 });
  const mdBlocks = await n2m.pageToMarkdown(posts[0].id);
  const mdString = n2m.toMarkdownString(mdBlocks);

  if (posts.length === 0) {
    throw new Error(ERROR_CODE.not_found_the_resource);
  }

  return mdString;
};

type DatabasePropertyConfigResponse = PageObjectResponse['properties'][string];

type ExtractDatabasePropertyConfig<T extends DatabasePropertyConfigResponse['type']> = Extract<
  DatabasePropertyConfigResponse,
  { type: T }
>;

export type CustomDatabaseObjectResponse = PageObjectResponse & {
  properties: {
    ID: ExtractDatabasePropertyConfig<'unique_id'>;
    Date: ExtractDatabasePropertyConfig<'date'>;
    Name: ExtractDatabasePropertyConfig<'title'>;
    Published: ExtractDatabasePropertyConfig<'checkbox'>;
    Tags: ExtractDatabasePropertyConfig<'multi_select'>;
  };
};
