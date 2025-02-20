export const MENU = [
  // {
  // 	id: "1",
  // 	title: "Home",
  // 	href: "/",
  // },
  {
    id: '1',
    title: 'Tags',
    href: '/tag',
  },
  {
    id: '3',
    title: 'About',
    href: '/about',
  },
  {
    id: '4',
    title: 'Diary',
    href: '/diary',
  },
];

export const BLOG_TITLE = 'Chaehyun Space';

export const FOOTER_TEXT = '© 2023 Chaehyun Space. All rights reserved. Based on Next.js';

type TitleSlugObj = {
  [key: string]: string;
};

export const TITLE_FOR_SLUG_OBJ: TitleSlugObj = {
  'goodbye-2023': '안녕, 2023년',
  'look-back': 'Look Back',
  'variable-hoisting': '변수와 호이스팅',
  'wecode-memoir': '위코드를 마치며...',
};

export const FOOTER_DESCRIPTION =
  '열심히 살고싶은 개발자, 임채현의 개발 블로그입니다.' +
  '<br />' +
  '기록을 습관하하여 더 발전하는 내일을 만들어갑니다.';
