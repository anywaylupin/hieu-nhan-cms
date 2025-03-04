import { BlogPosts } from '@/components/common';
import { cookies } from 'next/headers';
import { getBlogPosts } from '@/app/actions';

export const SectionBlog = async () => {
  const cookieStore = await cookies();
  const username = cookieStore.get('username')?.value;

  const posts = await getBlogPosts();

  return (
    <section id="projects" className="w-full space-y-12 pt-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="bg-foreground text-background inline-block rounded-lg px-3 py-1 text-sm">Blogs</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore my recent blogs</h2>
        </div>
      </div>
      <BlogPosts posts={posts} />
    </section>
  );
};
