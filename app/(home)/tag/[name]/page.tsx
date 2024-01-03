import {blogs} from '@/lib/data'
import Posts from '@/components/Posts'

export default function page({ params }: { params: { name: string }}) {
	const blogsFilteredByTagName = blogs.filter(blog => blog.tags.includes(params.name));


 	return (
		<Posts blogs={blogsFilteredByTagName} />
	)
};