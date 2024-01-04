import React from 'react';
import Image from 'next/image';
import Content from './components/Content';
import { getPostContent, getPostMetadata } from '@/lib/actions/blog';

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map(post => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const postsMetadata = getPostMetadata();
  const post = postsMetadata.find(post => post.slug === params.slug);

  return {
    title: post?.title,
    authors: {
      name: 'chaehyunim',
    },
    openGraph: {
      title: post?.title,
      url: `https://chaehyunim.vercel.app/blog/${post?.slug}`,
      siteName: 'Chaehyun Space',
      images: post?.image_url,
      type: 'website',
    },
    keywords: post?.tags,
  };
};

export default async function page({ params }: { params: { slug: string } }) {
  const { slug = '' } = params;
  const postsMetadata = getPostMetadata();
  const postMetadata = postsMetadata.find(post => post.slug === slug);
  const postContent = getPostContent(slug);

  if (!slug) {
    return <h1 className="text-white">Not found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto min-h-screen  pt-10 space-y-10">
      <div className="sm:px-10 space-y-5">
        <h1 className=" text-3xl font-bold dark:text-gray-200">{postMetadata?.title}</h1>
        <p className="text-sm dark:text-gray-400">{new Date(postMetadata?.created_at!).toDateString()}</p>
      </div>

      <div className="w-full h-96 relative">
        <Image
          priority
          src={postMetadata?.image_url!}
          alt="cover"
          fill
          className=" object-cover object-center rounded-md border-[0.5px] border-zinc-600"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <Content blogContent={postContent} />
    </div>
  );
}
