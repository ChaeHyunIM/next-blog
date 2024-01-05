import Image from 'next/image';
import HoverUnderLine from '../nav/HoverUnderLine';
import Link from 'next/link';
import { IBlogMetadata } from '@/lib/types';
import './index.scss';

interface Props {
  blogs: IBlogMetadata[];
}

export default function Posts({ blogs }: Props) {
  if (!blogs.length) return <div className="w-full h-full flex justify-center items-center">No posts</div>;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 p-5 xl:p-0">
      {blogs.map((blog, index) => {
        return (
          <Link
            href={'/blog/' + blog.slug}
            className="magic-border w-full border rounded-md dark:bg-graident-dark p-5 cursor-pointer space-y-5 first:lg:col-span-2 first:md:col-span-3"
            key={index}
          >
            <div className="w-full h-72 sm:w-full md:h-64 xl:h-96 relative">
              <Image
                priority
                src={blog.image_url}
                alt="cover"
                fill
                className=" rounded-md object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {blog.tags.length
                  ? blog.tags.map((tag, index) => {
                      return (
                        <Link href={`/tag/${tag}`} key={index} className="text-sm dark:text-gray-200">
                          <HoverUnderLine key={index} className="bg-green-500 h-[0.1em]">
                            {tag}
                          </HoverUnderLine>
                        </Link>
                      );
                    })
                  : null}
              </div>
              <p className="text-sm dark:text-gray-400">{new Date(blog.created_at).toDateString()}</p>
              <h1 className="text-xl font-bold dark:text-gray-300">{blog.title}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
