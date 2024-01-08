'use client';
import React from 'react';
import HoverUnderLine from './HoverUnderLine';
import Link from 'next/link';
import Image from 'next/image';
import picture from '@/public/images/cute_astronaut.png';
import { MENU } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import NavbarTitle from './NavbarTitle';

export default function Navbar() {
  const pathname = usePathname();
  const slug = pathname.split('/')[2];
  const { scrollYProgress } = useScroll();

  const isBlog = pathname.includes('/blog');

  const motionDivStyle = {
    scaleX: scrollYProgress,
    transformOrigin: '0%',
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
          <NavbarTitle isBlog={isBlog} slug={slug} />
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
