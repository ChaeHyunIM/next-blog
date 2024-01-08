import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import Navbar from '@/components/nav';
import { Toaster } from '@/components/ui/toaster';
import { FOOTER_DESCRIPTION } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://chaehyunim.vercel.app/'),

  title: {
    template: '%s | Chaehyun Space',
    default: 'Chaehyun Space',
  },
  authors: {
    name: 'chaehyunim',
  },

  description: FOOTER_DESCRIPTION,
  openGraph: {
    title: 'Chaehyun Space',
    description: 'FOOTER_DESCRIPTION',
    url: 'https://dailyblog-demo.vercel.app/',
    siteName: 'Chaehyun Space',
    images: '/images/cute_astronaut',
    type: 'website',
  },
  keywords: [
    'blog',
    'chaehyunim',
    'chaehyun space',
    'chaehyun',
    'chaehyun blog',
    'chaehyunim blog',
    'javascript',
    'web frontend',
    'React',
    'Next.js',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('antialiased dark:bg-[#09090B]', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="max-w-7xl mx-auto lg:py-6 space-y-6 p-5 lg:p-0">
            <header className="sticky top-0 z-10 bg-black">
              <Navbar />
            </header>
            <main className="px-1">{children}</main>
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
