import Posts from '@/components/posts';
import { getPostsMetadata } from '@/lib/actions/blog';

export async function generateStaticParams() {
  const postMetadata = getPostsMetadata();
  return postMetadata.flatMap(post => post.tags).filter((tag, index, self) => self.indexOf(tag) === index);
}

export default function page({ params }: { params: { name: string } }) {
  const decodedName = decodeURIComponent(params.name);
  const posts = getPostsMetadata();
  const postsFilteredByTagName = posts.filter(post => post.tags.includes(decodedName));

  return <Posts blogs={postsFilteredByTagName} />;
}
