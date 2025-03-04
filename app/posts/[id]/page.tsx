import 'react-notion/src/styles.css';

import { NEXT_PUBLIC_BASE_URL } from '@/lib/constants';
import ReactMarkdown from 'react-markdown';

const Page = async ({ params }: BlogRequest) => {
  const { id } = await params;

  let res = { parent: '' };

  try {
    const response = await fetch(NEXT_PUBLIC_BASE_URL + `/api/posts/${id}`, { method: 'GET' });
    if (response.ok) {
      res = await response.json();
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error(error);
  }

  return <ReactMarkdown>{res.parent}</ReactMarkdown>;
};

export default Page;
