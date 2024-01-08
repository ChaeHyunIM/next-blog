import Posts from '@/components/posts';
import { getPostsMetadata } from '@/lib/actions/blog';

export default function page() {
  const blogs = getPostsMetadata();
  const blogFilteredByTagDiary = blogs.filter(blog => blog.tags.includes('diary'));
  return <Posts blogs={blogFilteredByTagDiary} />;
}
