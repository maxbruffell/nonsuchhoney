import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './global.css';
import { Providers } from './providers';
import { DesignModeInit } from '../__create/DesignModeInit';

export const metadata: Metadata = {
  title: 'Nonsuch Honey',
  description: 'Pure local honey from our own bees in Cheam, Surrey.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Nonsuch Honey',
    description: 'Pure local honey from our own bees in Cheam, Surrey.',
    siteName: 'Nonsuch Honey',
    type: 'website',
    images: ['https://raw.createusercontent.com/9288fe55-4423-4ff9-9e51-1b9ac09eb74e/'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nonsuch Honey',
    description: 'Pure local honey from our own bees in Cheam, Surrey.',
    images: ['https://raw.createusercontent.com/9288fe55-4423-4ff9-9e51-1b9ac09eb74e/'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/fontawesome/releases/v6.3.0/css/pro.min.css?token=2c15cc0cc7"
        />
      </head>
      <body>
        <DesignModeInit />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
