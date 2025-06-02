import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Darshan Gupta",
  description: "Personal website of Darshan Gupta – CS @ UIUC, CrowdStrike, and more.",
  openGraph: {
    title: "Darshan Gupta",
    description: "Personal website of Darshan Gupta – CS @ UIUC, CrowdStrike, and more.",
    url: "https://darshangupta.com",
    siteName: "Darshan Gupta",
    images: [
      {
        url: "/realdog.png",
        width: 1200,
        height: 630,
        alt: "Dog coding meme thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshan Gupta",
    description: "Personal website of Darshan Gupta – CS @ UIUC, CrowdStrike, and more.",
    images: ["/realdog.png"],
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
        {children}
      </body>
    </html>
  );
}
