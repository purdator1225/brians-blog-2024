import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const header = (
    <header>
      <div className="bg-pink-300 text-center">
        <Link href={"/"}><h1>This is Brian's Blog</h1></Link>

        <p>Welcome to my blog where we discuss how to build yourself the way that you want</p>
      </div>
    </header>
  )

  const footer = (
    <footer className="bg-pink-300">This is a Footer</footer>
  )

  return (
    <html lang="en">

      <body className={inter.className}>
        {header}

        {children}

        {footer}

      </body>
    </html>
  );
}
