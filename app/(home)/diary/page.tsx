import Posts from '@/components/Posts'
import { getPostMetadata } from '@/lib/actions/blog'

export default function page () {
	const blogs = getPostMetadata()
	const blogFilteredByTagDiary = blogs.filter(blog => blog.tags.includes('diary'))
	return (
		<Posts blogs={blogFilteredByTagDiary} />
	)
}