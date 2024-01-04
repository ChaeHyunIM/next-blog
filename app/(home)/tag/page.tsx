import { getPostMetadata, getTagCount } from '@/lib/actions/blog';
import Link from 'next/link';
import "./page.scss";

export default function page() {
	const posts = getPostMetadata();
	const tagCount = getTagCount(posts);
	const tagCountArr = Object.entries(tagCount);
	
	return (
		<div>
			<h1 className="font-bold text-3xl mb-5">Tags</h1>
			<div className='fill-in flex flex-wrap gap-4'>
				{tagCountArr.map(tag => {
					return (
						<Link
							href={`/tag/${tag[0]}`}
							key={tag[0]}
							className='rounded-full bg-gray-600 px-4 py-2'
						>
							{tag[0]} ({tag[1]})
						</Link>
					)
				})}
			</div>
		</div>
	)
};