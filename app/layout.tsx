import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import "./globals.css";


const roboto = Zilla_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Arpit Sarkar",
  description: "As a Front-End Web Developer, I excel in creating stunning, responsive websites using HTML, CSS (especially Tailwind CSS), and JavaScript/React.js for dynamic interfaces. I also handle backend tasks with MongoDB/Express and excel in API integration. My toolkit includes advanced tools like Firebase, Redux, and Material UI/Icons for high-performance web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <body className={roboto.className}>{children}</body>
    </html>
  );
}
