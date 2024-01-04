import Posts from '@/components/Posts'
import { getPostMetadata } from '@/lib/actions/blog';

export async function generateStaticParams() {
	const postMetadata = getPostMetadata();
	return postMetadata.flatMap(post => post.tags).filter((tag, index, self) => self.indexOf(tag) === index);
}

export default function page({ params }: { params: { name: string }}) {
	const posts = getPostMetadata();
	const postsFilteredByTagName = posts.filter(post => post.tags.includes(params.name));


 	return (
		<Posts blogs={postsFilteredByTagName} />
	)
};