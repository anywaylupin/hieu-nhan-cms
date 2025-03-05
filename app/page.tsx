import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui';

import HomePage from './home-page';

export default function Page() {
  return (
    <main className="relative">
      <Breadcrumb className="absolute top-20 left-[4%] z-10">
        <BreadcrumbList className="text-2xl">
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/posts">My Works</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <HomePage />
    </main>
  );
}
