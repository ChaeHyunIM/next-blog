"use client";
import React from "react";
import HoverUnderLine from "./HoverUnderLine";
import Link from "next/link";
import Image from "next/image";
import profileImage from "@/public/profile.jpeg";
import { MENU, BLOG_TITLE } from "@/lib/constants";

export default function Navbar() {

	return (
		<nav className="w-full justify-between items-center flex p-5 xl:p-0">
			<div className="display: flex h-12 items-center gap-x-3">
			<Image
					src={profileImage}
					alt={'chaehyun blog logo'}
					width={48}
					height={48}
					className="rounded-full ring-2 ring-green-500 h-12 w-12"
				/>
			<HoverUnderLine>
				<Link href={"/"} className="font-bold text-3xl">
					{BLOG_TITLE}
				</Link>
			</HoverUnderLine>
			</div>
			<div className="display: flex h-12 items-center gap-x-3">
				{MENU.map((item) => {
					return (
						<HoverUnderLine key={item.id}>
						<Link href={item.href} className="font-bold text-2xl">
							{item.title}
						</Link>
					</HoverUnderLine>
					)
				})}
			</div>
		</nav>
	);
}
