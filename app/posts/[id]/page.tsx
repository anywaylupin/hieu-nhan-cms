import { Article } from '@/components/common';
import { cookies } from 'next/headers';
import { getBlogPostById } from '@/lib/notion';
import { notFound } from 'next/navigation';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const cookieStore = await cookies();
  cookieStore.get('username');

  const post = await getBlogPostById(id);
  if (!post) return notFound();

  return <Article {...post}></Article>;
};

export default Page;
