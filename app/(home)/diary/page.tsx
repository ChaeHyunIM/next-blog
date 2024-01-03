import Posts from '@/components/Posts'
import { blogs } from '@/lib/data'

export default function page () {
	const blogFilteredByTagDiary = blogs.filter(blog => blog.tags.includes('diary'))
	return (
		<Posts blogs={blogFilteredByTagDiary} />
	)
}