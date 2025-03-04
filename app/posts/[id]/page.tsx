import { getPostById } from '@/lib/notion';
import ReactMarkdown from 'react-markdown';

const Page = async ({ params }: BlogRequest) => {
  const { id } = await params;
  const res = await getPostById(id);

  return <ReactMarkdown>{res?.markdown.parent}</ReactMarkdown>;
};

export default Page;
