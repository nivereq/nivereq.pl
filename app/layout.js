import "bootstrap-icons/font/bootstrap-icons.css";
import "./Fonts.css";
import "./Themes.css";
import "./Navigation.css";
import "./App.css";

import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'nivereq.pl',
  description: 'a cute arctic fox:3',
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
  
};



export default async function RootLayout({ children }) {

  return (
    <html lang="pl">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-0V1RV7Q39K" />
    </html>
  );
}
