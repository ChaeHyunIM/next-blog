import React, { useState, useEffect } from 'react';
import HoverUnderLine from './HoverUnderLine';
import Link from 'next/link';
import { BLOG_TITLE, TITLE_FOR_SLUG_OBJ } from '@/lib/constants';
import useScrollPosition from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

type NavbarTitleProps = {
  isBlog: boolean;
  slug: string;
};

export default function NavbarTitle({ isBlog, slug }: NavbarTitleProps) {
  const scrollPosition = useScrollPosition();
  const [prevScrollPosition, setPrevScrollPosition] = useState(scrollPosition);
  const [isFading, setIsFading] = useState(false);

  const getNavTitle = () => {
    if (!isBlog) return BLOG_TITLE;
    if (scrollPosition < 190) return BLOG_TITLE;

    return TITLE_FOR_SLUG_OBJ[slug] || BLOG_TITLE;
  };

  useEffect(() => {
    if (!isBlog) return;
    if (prevScrollPosition < 190 && scrollPosition >= 190) {
      setIsFading(true);
      setTimeout(() => setIsFading(false), 500);
    }
    if (prevScrollPosition >= 190 && scrollPosition < 190) {
      setIsFading(true);
      setTimeout(() => setIsFading(false), 500);
    }
    setPrevScrollPosition(scrollPosition);
  }, [prevScrollPosition, scrollPosition, isBlog]);

  return (
    <>
      {scrollPosition < 190 ? (
        <HoverUnderLine>
          <Link href={'/'}>
            <p className={cn('font-bold text-2xl', `${isFading ? 'fade' : ''}`)}>{getNavTitle()}</p>
          </Link>
        </HoverUnderLine>
      ) : (
        <p className={cn('font-bold text-2xl', `${isFading ? 'fade' : ''}`)}>{getNavTitle()}</p>
      )}
      <style jsx>{`
        .fade {
          animation: fadeInOut 1500ms;
        }
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
