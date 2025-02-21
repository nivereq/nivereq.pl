import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/Fonts.css";
import "./css/Themes.css";
import "./css/Navigation.css";
import "./css/App.css";
import "./css/Animations.css";

import { GoogleAnalytics } from '@next/third-parties/google'

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
      'pl-PL': '/',
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nivereq.pl',
    description: 'a cute arctic fox:3',
    creator: '@nivereq',
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
    authors: ['nivereq'],
  }
  
};



export default async function RootLayout({ children }) {

  return (
    <html lang="pl">
      <body
        className={`antialiased anim-appearing`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-0V1RV7Q39K" />
    </html>
  );
}
