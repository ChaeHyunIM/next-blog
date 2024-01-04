import React from 'react';
import { GitHubLogoIcon, NotionLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { FOOTER_TEXT, BLOG_TITLE, FOOTER_DESCRIPTION } from '@/lib/constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" border-t py-10">
      <div className="max-w-7xl py-10 px-5 md:p-0 space-y-5  mx-auto flex justify-between md:items-end flex-col md:flex-row">
        <div className="space-y-10">
          <div className="space-y-2 w-full sm:w-108">
            <h1 className="text-3xl font-bold">{BLOG_TITLE}</h1>
            <p dangerouslySetInnerHTML={{ __html: FOOTER_DESCRIPTION }} />
          </div>
          <div className="flex items-center gap-3">
            <Link href="https://github.com/chaehyunim" target="_blank">
              <GitHubLogoIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://triangular-coriander-f49.notion.site/a5915cfb0f5b4760ae2d1879f0272bd9?pvs=4"
              target="_blank"
            >
              <NotionLogoIcon className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com/in/채현-임-60840726b" target="_blank">
              <LinkedInLogoIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <h1 className="text-sm">{FOOTER_TEXT}</h1>
      </div>
    </footer>
  );
}
