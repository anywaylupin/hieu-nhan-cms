'use server';

import {
  DatabaseObjectResponse,
  PropertyItemObjectResponse,
  RichTextItemResponse
} from '@notionhq/client/build/src/api-endpoints';
import { databaseId, notion } from '@/lib/notion';

export const getBlogPosts = async () => {
  try {
    const response = await notion.getPage(databaseId);

    return response;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    return [];
  }
};

export const getBlogPostById = async (id: string) => {
  try {
    const response = await notion.getPage(id);

    if (!response) {
      throw new Error('Post not found');
    }

    return response as unknown as CustomDatabaseObjectResponse;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    return {} as CustomDatabaseObjectResponse;
  }
};

type ExtractPropertyConfig<T extends PropertyItemObjectResponse['type']> = Extract<
  PropertyItemObjectResponse,
  { type: T }
>;

export type CustomDatabaseObjectResponse = DatabaseObjectResponse & {
  properties: {
    Name: ExtractPropertyConfig<'title'> & { title: RichTextItemResponse[] };
    Published: ExtractPropertyConfig<'checkbox'>;
    Date: ExtractPropertyConfig<'date'>;
    Tags: ExtractPropertyConfig<'multi_select'>;
  };
};
