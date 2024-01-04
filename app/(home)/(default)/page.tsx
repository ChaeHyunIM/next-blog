import React from "react";
import {blogs as data} from '@/lib/data'
import Posts from "@/components/Posts";
import { getPostMetadata } from "@/lib/actions/blog";

export default async function Home() {
	// let blogs = data;
	// let { data: blogs } = await readBlog();
	const blogs = getPostMetadata();

	return (
		<Posts blogs={blogs} />
	);
}
