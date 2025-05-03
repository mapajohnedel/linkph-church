import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Church PH",
  description: "Connecting what matters to God",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full flex flex-col sm:flex-row sm:justify-between items-center py-6 px-4 bg-gradient-to-b from-green-500 to-green-400 shadow-md mb-8">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <Image src="/logo.png" alt="Link Ph Logo" width={40} height={40} className="rounded-full bg-white p-1 shadow" />
            <span className="text-white text-2xl font-bold tracking-wide">Link Ph</span>
          </div>
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <li><Link href="/" className="text-white px-4 py-2 rounded transition-colors hover:bg-white/20 hover:text-white font-medium">Home</Link></li>
            <li><Link href="/about" className="text-white px-4 py-2 rounded transition-colors hover:bg-white/20 hover:text-white font-medium">About</Link></li>
            <li><Link href="/services" className="text-white px-4 py-2 rounded transition-colors hover:bg-white/20 hover:text-white font-medium">Services</Link></li>
            <li><Link href="/events" className="text-white px-4 py-2 rounded transition-colors hover:bg-white/20 hover:text-white font-medium">Events</Link></li>
            <li><Link href="/contact" className="text-white px-4 py-2 rounded transition-colors hover:bg-white/20 hover:text-white font-medium">Contact</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
