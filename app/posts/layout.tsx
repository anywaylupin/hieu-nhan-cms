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
    <main className="relative">
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

      {children}
    </main>
  );
};

export default PostsLayout;
