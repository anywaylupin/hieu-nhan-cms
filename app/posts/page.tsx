import { BlogPosts } from '@/components/common';
import { cookies } from 'next/headers';
import { getBlogPosts } from '@/lib/notion';

const Page = async () => {
  const cookieStore = await cookies();
  const username = cookieStore.get('username')?.value;

  const posts = await getBlogPosts();

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Hi {username}!</h1>
      <BlogPosts posts={posts} />
    </>
  );
};

export default Page;
