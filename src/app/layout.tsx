import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authorization System",
  description:
    "Developed with Next.js, TypeScript, and MongoDB by @nabinkhair42",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <AuthProvider>
        <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
      </AuthProvider>
    </html>
  );
}
