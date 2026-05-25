import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "YM Website",
  description: "Young Muslims Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="bg-[#0B0F14] text-white min-h-full flex flex-col"><Navbar />{children}</body>
    </html>
  );
}
