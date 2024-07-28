import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aran Bruce-Caddick | Personal Website",
  description: "Aran Bruce-Caddick's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100 dark:bg-primary">
      <body className={urbanist.className}>
        <Header />
        <div className="relative flex min-h-screen flex-col pb-24">
          <div className="absolute inset-0 -z-10 grid grid-cols-4 divide-x divide-dashed divide-secondary/20 bg-gray-100 md:grid-cols-6 dark:bg-primary">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
