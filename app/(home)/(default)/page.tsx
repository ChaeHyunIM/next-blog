import Link from "next/link";
import React from "react";
import Image from "next/image";
import { readBlog } from "@/lib/actions/blog";
import {blogs as data} from '@/lib/data'
import HoverUnderLine from "@/components/nav/HoverUnderLine";
import Posts from "@/components/Posts";

export default async function Home() {
	let blogs = data;
	// let { data: blogs } = await readBlog();

	if (!blogs?.length) {
		blogs = [];
	}

	return (
		<Posts blogs={blogs} />
	);
}
