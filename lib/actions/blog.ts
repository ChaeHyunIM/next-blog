// "use server";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IBlogMetadata } from '../types';

export const getPostsMetadata = (): IBlogMetadata[] => {
  const folder = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter(file => file.endsWith('.md'));
  const posts = markdownPosts.map(fileName => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      slug: fileName.replace('.md', ''),
      image_url: matterResult.data.image_url as string,
      created_at: matterResult.data.created_at as string,
      is_published: matterResult.data.is_published as boolean,
      title: matterResult.data.title as string,
      tags: matterResult.data.tags as string[],
    };
  });

  return posts;
};

export const getPostTitleForSlug = (slug: string) => {
  const folder = path.join(process.cwd(), 'posts');
  const file = `${folder}/${slug}.md`;
  const post = fs.readFileSync(file, 'utf8');
  const matterResult = matter(post);
  return matterResult.data.title;
};

export const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult.content;
};

export const getTagCount = (posts: IBlogMetadata[]) => {
  return posts
    .map(post => post.tags)
    .flat()
    .reduce((acc: { [key: string]: number }, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
};
