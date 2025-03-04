import type { ExtendedRecordMap, SearchParams, SearchResults } from 'notion-types';

import { NotionAPI } from 'notion-client';
import { mergeRecordMaps } from 'notion-utils';
import pMap from 'p-map';
import pMemoize from 'p-memoize';

export const databaseId = process.env.NOTION_DATABASE_ID;

export const notion = new NotionAPI({ activeUser: process.env.NOTION_USER_ID, authToken: process.env.NOTION_TOKEN_V2 });

const getNavigationLinkPages = pMemoize(async (): Promise<ExtendedRecordMap[]> => {
  const navigationLinkPageIds = [].map((link) => link.pageId).filter(Boolean);

  if (navigationLinkPageIds.length) {
    return pMap(
      navigationLinkPageIds,
      async (navigationLinkPageId) =>
        notion.getPage(navigationLinkPageId, {
          chunkLimit: 1,
          fetchMissingBlocks: false,
          fetchCollections: false,
          signFileUrls: false
        }),
      {
        concurrency: 4
      }
    );
  }

  return [];
});

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  let recordMap = await notion.getPage(pageId);

  // ensure that any pages linked to in the custom navigation header have
  // their block info fully resolved in the page record map so we know
  // the page title, slug, etc.
  const navigationLinkRecordMaps = await getNavigationLinkPages();

  if (navigationLinkRecordMaps?.length) {
    recordMap = navigationLinkRecordMaps.reduce(
      (map, navigationLinkRecordMap) => mergeRecordMaps(map, navigationLinkRecordMap),
      recordMap
    );
  }

  return recordMap;
}

export async function search(params: SearchParams): Promise<SearchResults> {
  return notion.search(params);
}
