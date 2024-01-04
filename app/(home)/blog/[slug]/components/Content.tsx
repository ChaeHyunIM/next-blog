"use client";
import MarkdownPreview from "@/components/markdown/MarkdownPreview";



export default function Content({ blogContent }: { blogContent: string }) {

	if (!blogContent) {
		return <h1 className="text-white">Not found</h1>;
	}

	return <MarkdownPreview content={blogContent || ""} />;
}
