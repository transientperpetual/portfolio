import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getDatabase } from '../lib/notion'
import { getArticlePositions } from '../lib/getArticlePositions'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Jangid - Hello !",
  description: "Digital Portfolio",
};

const databaseId = process.env.NOTION_PROJECTS_DB_ID;
  const database = await getDatabase(databaseId);
  console.log("DB : ", database)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
