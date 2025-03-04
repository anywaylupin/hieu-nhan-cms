declare type TNotionBlogPage = any; //TODO: Define your own type

declare type TNotionBlogResult = any; //TODO: Define your own type

declare type TNotionBlogGetBlogResponse = {
  result: TResult;
};

declare type BlogRequest = {
  params: Promise<{ id: string }>;
};
