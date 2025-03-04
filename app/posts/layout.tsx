import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui';

const PostsLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Breadcrumb className="absolute top-20 left-30 z-10">
        <BreadcrumbList className="text-2xl">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="py-4">
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">📝 Blogs:</h2>
          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{children}</div>
        </section>
      </div>
    </>
  );
};

export default PostsLayout;
