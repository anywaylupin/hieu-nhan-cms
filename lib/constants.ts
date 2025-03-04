const normalizeId = (id: string) => {
  if (!id) return id;
  if (id.length === 36) return id;
  if (id.length !== 32) {
    throw new Error(
      `Invalid NOTION_DATABASE_ID: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`
    );
  }

  return `${id.substring(0, 8)}-${id.substring(8, 4)}-${id.substring(12, 4)}-${id.substring(16, 4)}-${id.substring(20)}`;
};

export const NOTION_TOKEN = process.env.NOTION_TOKEN;
export const NOTION_DATABASE_ID = normalizeId(process.env.NOTION_DATABASE_ID);

export const BLUR_FADE_DELAY = 0.01;
