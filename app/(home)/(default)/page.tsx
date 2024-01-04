import React from "react";
import Posts from "@/components/posts";
import { getPostMetadata } from "@/lib/actions/blog";

export default async function Home() {
	const blogs = getPostMetadata();

	return (
		<Posts blogs={blogs} />
	);
}
