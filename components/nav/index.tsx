'use client';
import React from 'react';
import HoverUnderLine from './HoverUnderLine';
import Link from 'next/link';
import Image from 'next/image';
import picture from '@/public/images/cute_astronaut.png';
import { MENU, BLOG_TITLE } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import useScrollPosition from '@/hooks/useScrollPosition';

type Props = {
  isBlog?: boolean;
};

export default function Navbar() {
  const pathname = usePathname();
  const slug = pathname.split('/')[2];
  const { scrollYProgress } = useScroll();
  const scrollPosition = useScrollPosition();

  const motionDivStyle = {
    scaleX: scrollYProgress,
    transformOrigin: '0%',
  };
  const isBlog = pathname.includes('/blog');

  const getNavTitle = () => {
    if (!isBlog) return BLOG_TITLE;
    if (scrollPosition < 190) return BLOG_TITLE;
    return slug;
  };

  return (
    <>
      <nav className="w-full justify-between items-center flex py-4 relative">
        <div className="display: flex items-center gap-x-5">
          <Image
            src={picture}
            alt={'chaehyun blog logo'}
            width={48}
            height={48}
            className="rounded-full ring-2 ring-green-500"
          />
          <HoverUnderLine>
            <Link href={'/'} className="font-bold text-2xl">
              {getNavTitle()}
            </Link>
          </HoverUnderLine>
        </div>
        <div className="display: flex h-12 items-center gap-x-3">
          {MENU.map(item => {
            return (
              <HoverUnderLine key={item.id}>
                <Link href={item.href} className="font-bold text-xl">
                  {item.title}
                </Link>
              </HoverUnderLine>
            );
          })}
        </div>
        {isBlog ? (
          <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500" style={motionDivStyle}></motion.div>
        ) : null}
      </nav>
    </>
  );
}
