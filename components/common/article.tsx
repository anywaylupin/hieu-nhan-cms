import { CustomDatabaseObjectResponse, getPostProperties } from '@/lib/notion';

import Image from 'next/image';
import Link from 'next/link';

export const Article = (props: CustomDatabaseObjectResponse) => {
  const { image, description, title, content, date, tags } = getPostProperties(props);

  return (
    <article className="prose dark:prose-invert max-w-4xl py-6">
      {/* Back to Blog */}
      <Link href="/posts" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
        ← Back to Blog
      </Link>

      {/* Title */}
      <h1 className="mt-3 text-3xl font-bold">{title}</h1>

      {/* Metadata */}
      <div className="mt-2 flex flex-wrap items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <time>{new Date(date).toLocaleDateString()}</time>
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag.id} className="rounded-full bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-800">
                #{tag.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <hr className="my-4 border-gray-300 dark:border-gray-700" />

      {/* Cover Image */}
      {image && (
        <figure className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-lg shadow-md">
          <Image src={image} alt={title} layout="fill" objectFit="cover" priority />
          {description && <figcaption className="mt-2 text-sm text-gray-500">{description}</figcaption>}
        </figure>
      )}

      {/* Article Content */}
      <section className="mt-6">{content}</section>

      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      {/* Footer */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>Thank you for reading! If you enjoyed this post, consider sharing it.</p>
      </div>
    </article>
  );
};
