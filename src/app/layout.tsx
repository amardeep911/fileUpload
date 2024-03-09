import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
const inter = Inter({ subsets: ["latin"] });

import AuthProvider from "../components/AuthProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-black">
          <Nav />

          <div className="m-2">{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
