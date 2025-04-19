import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Lexend } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import 'bootstrap-icons/font/bootstrap-icons.css';

import '@/styles/global.css';

const lexend = Lexend({
    subsets: ['latin'],
    display: 'swap',
    weight: ['200', '300','400', '500', '600', '700'],
    style: 'normal'
})


export const metadata = {
    title: 'nivereq.pl',
    keywords: ["nivereq", "youtube", "furry", "arctic fox", "arctic fox fursona", "dev"],
    description: '🦊 *yelping at you*',
    appleWebApp: {
      title: "nivereq.pl",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      languages: {
        'en-US': '/en',
        'pl-PL': '/pl',
      }
    },
    openGraph: {
      title: 'nivereq.pl',
      description: '🦊 *yelping at you*',
      url: 'https://nivereq.pl',
      siteName: 'nivereq.pl',
      images: [
        {
          url: 'https://nivereq.pl/opengraph-image.jpg',
          width: 128,
          height: 128,
        }
      ],
    }
  
  };

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body className={`antialiased ${lexend.className}`}>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
            <GoogleAnalytics gaId="G-0V1RV7Q39K" />
        </html>
    );
}