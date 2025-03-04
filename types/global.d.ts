export {};

declare global {
  interface Window {}

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL?: string;
      NOTION_USER_ID: string;
      NOTION_TOKEN_V2: string;
      NOTION_DATABASE_ID: string;
    }
  }
}
