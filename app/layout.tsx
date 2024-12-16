import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {ClerkProvider , ClerkLoaded, ClerkLoading} from '@clerk/nextjs'
import "./globals.css";
import Loading from "../components/shared/Loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management",
  icons: {
    icon: "./assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ClerkLoading>
            <Loading/>
          </ClerkLoading>
          <ClerkLoaded>

          {children}
          </ClerkLoaded>
          </body>
      </html>
    </ClerkProvider>
  );
}
