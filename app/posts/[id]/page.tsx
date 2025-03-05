import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui';
import { getPostById, getPostDetail } from '@/lib/notion';

import { Article, Loader } from '@/components/common';
import { Suspense } from 'react';

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

      <Suspense fallback={<Loader />}>
        <Article>{post?.markdown.parent}</Article>
      </Suspense>
    </main>
  );
};

export default Page;
