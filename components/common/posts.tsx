'use client';

import { CustomDatabaseObjectResponse, getPostProperties } from '@/lib/notion';

import Image from 'next/image';
import Link from 'next/link';

export const BlogPosts = ({ posts }: { posts: CustomDatabaseObjectResponse[] }) => {
  return (
    <div className="flex size-full flex-col space-y-6">
      {posts
        .toSorted((a, b) => {
          const dateA = new Date(a.properties.Date.date?.start ?? a.created_time);
          const dateB = new Date(b.properties.Date.date?.start ?? b.created_time);
          return dateA > dateB ? -1 : 1;
        })
        .map((post) => {
          const { image, description, title, date, tags } = getPostProperties(post);

          return (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md md:grid md:grid-cols-[auto,1fr] dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Cover Image */}
              <div className="relative h-40 w-full md:h-auto md:w-48">
                {image && (
                  <Image src={image} alt={title} fill className="object-cover transition group-hover:opacity-90" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col p-4">
                <Link href={`/posts/${post.id}`} className="mt-1 block">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
                </Link>
                <p className="mt-2 line-clamp-3 text-sm text-gray-700 dark:text-gray-300">
                  {description || 'No summary available.'}
                </p>

                {/* Tags */}
                {tags?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">{date}</p>
              </div>
            </article>
          );
        })}
    </div>
  );
};
