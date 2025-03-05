import {
  BentoGrid,
  BentoGridItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui';
import { getPostDetail, getPostImage, getPostList } from '@/lib/notion';

import Image from 'next/image';
import Link from 'next/link';
import { formatDateLocalized } from '@/lib/utils';

const Page = async () => {
  const posts = await getPostList();

  if (!posts.length) {
    return <p className="text-center text-gray-500">No posts available.</p>;
  }

  return (
    <main className="relative flex flex-col gap-6 py-20">
      <Breadcrumb className="relative pl-30">
        <BreadcrumbList className="text-2xl">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>My Works</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <BentoGrid>
        {posts.map((post) => {
          const { id, title, description, date, images } = getPostDetail(post);
          const image = images?.[0] ? getPostImage(images[0]) : null;

          return (
            <Link key={id} href={`/posts/${id}`} className="block">
              <BentoGridItem
                className="size-full"
                header={
                  image && (
                    <Image
                      width={300}
                      height={200}
                      className="w-full rounded-sm"
                      src={image.url}
                      alt={image.alt || title}
                    />
                  )
                }
                title={title}
                description={
                  <>
                    <p>{description}</p>
                    <time dateTime={new Date(date).toISOString()}>{formatDateLocalized(new Date(date))}</time>
                  </>
                }
              />
            </Link>
          );
        })}
      </BentoGrid>
    </main>
  );
};

export default Page;
