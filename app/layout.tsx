import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Arpit Sarkar",
  description: "As a Full Stack Web Developer, I excel in creating stunning, responsive websites using HTML, CSS (especially Tailwind CSS), and JavaScript/React.js for dynamic interfaces. I also handle backend tasks with MongoDB/Express and excel in API integration. My toolkit includes advanced tools like Firebase, Redux, and Material UI/Icons for high-performance web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <body>{children}</body>
    </html>
  );
}
