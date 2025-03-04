export {};

declare global {
  interface Window {}

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL?: string;
      NOTION_TOKEN: string;
      NOTION_DATABASE_ID: string;
    }
  }
}
