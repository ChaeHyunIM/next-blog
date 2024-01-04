import React from "react";
import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	DiscordLogoIcon,
} from "@radix-ui/react-icons";
import { FOOTER_TEXT, BLOG_TITLE, FOOTER_DESCRIPTION } from "@/lib/constants";

export default function Footer() {
	return (
		<footer className=" border-t py-10">
			<div className="max-w-7xl py-10 px-5 md:p-0 space-y-5  mx-auto flex justify-between md:items-end flex-col md:flex-row">
				<div className="space-y-10">
					<div className="space-y-2 w-full sm:w-108">
						<h1 className="text-3xl font-bold">{BLOG_TITLE}</h1>
						<p dangerouslySetInnerHTML={{ __html: FOOTER_DESCRIPTION }}></p>
					</div>
					<div className="flex items-center gap-2">
						<GitHubLogoIcon className="w-5 h-5" />
						<LinkedInLogoIcon className="w-5 h-5" />
						<DiscordLogoIcon className="w-5 h-5" />
					</div>
				</div>
				<h1 className="text-sm">
					{FOOTER_TEXT}
				</h1>
			</div>
		</footer>
	);
}
