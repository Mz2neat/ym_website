import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-josefin",
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
      className={`${inter.className} ${josefin.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="bg-[#000010] text-white min-h-full flex flex-col">
  <Navbar />
  {children}
  <Footer />
</body>
    </html>
  );
}
