import { Geist, Geist_Mono } from "next/font/google";

import { Style } from "@mui/icons-material";
import App from './page';
import Head from "next/head";
import Link from "next/link";
import Header from './header';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "منصه علمفاي ",
  description: "رفيقك الذكي في رحله التعلم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
      <link   rel="preload" href="/_next/static/css/e62d17760b25927f.css" data-precedence="next" as="Style"/>
        <link rel="preload" href="/_next/static/css/3bcdf2d92adae83e.css" data-precedence="next" as="Style"/>
        <link rel="preload" href="/_next/static/css/03e1d9b303c5a6ff.css" data-precedence="next" as="Style"/>
        <link rel="preload" href="/_next/static/css/d498c84e4ab246b3.css" data-precedence="next" as="Style"/>
        <link rel="preload" href="/_next/static/css/dabd977388a70434.css" data-precedence="next" as="Style"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}` }>
        {children}
      </body>
    </html>
  );
}
