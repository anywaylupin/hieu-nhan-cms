import { NEXT_PUBLIC_BASE_URL } from '@/lib/constants';
import { CustomDatabaseObjectResponse } from '@/lib/notion';
import { formatDateLocalized } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const Blogs = async () => {
  let posts: CustomDatabaseObjectResponse[] = [];

  try {
    const response = await fetch(NEXT_PUBLIC_BASE_URL + '/api/posts');

    if (response.ok) {
      posts = await response.json();
    } else {
      console.error('Failed to add todo item');
    }
  } catch (error) {
    console.error('Error:', error);
  }

  if (!posts) {
    return <div>loading...</div>;
  }

  return posts.map(({ id, properties, cover, created_time }) => (
    <Link key={id} href={`/posts/${properties.ID.unique_id.number}`} className="block">
      <article className="max-w-sm rounded-lg border shadow-md">
        {cover?.type === 'external' && (
          <Image
            width={600}
            height={400}
            className="aspect-video w-full rounded-t-lg"
            src={cover.external.url}
            alt={'Card image'}
          />
        )}
        <div className="p-5">
          <h5 className="mb-2 line-clamp-2 text-lg font-bold tracking-tight">
            {properties.Name.title[0].plain_text || 'No title'}
          </h5>
          <time
            className="text-sm text-gray-500 italic dark:text-gray-400"
            dateTime={new Date(created_time).toISOString()}
          >
            {formatDateLocalized(new Date(created_time))}
          </time>
        </div>
      </article>
    </Link>
  ));
};

export default Blogs;
