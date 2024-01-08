import React from 'react';
import Posts from '@/components/posts';
import { getPostsMetadata } from '@/lib/actions/blog';

export default async function Home() {
  const blogs = getPostsMetadata();

  return <Posts blogs={blogs} />;
}
