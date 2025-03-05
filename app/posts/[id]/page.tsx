import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui';
import { getPostById, getPostDetail } from '@/lib/notion';

import { Article } from '@/components/common';

const Page = async ({ params }: BlogRequest) => {
  const { id } = await params;
  const post = await getPostById(id);

  const { title } = getPostDetail(post);

  return (
    <main className="relative flex size-full flex-col gap-6 py-20">
      <Breadcrumb className="relative pl-30">
        <BreadcrumbList className="text-2xl">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/posts">My Works</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Article>{post?.markdown.parent}</Article>
    </main>
  );
};

export default Page;
