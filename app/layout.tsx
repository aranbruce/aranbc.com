import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={urbanist.className}>
        <ThemeProvider>
          <Header />
          <div className="relative flex min-h-screen flex-col pb-24">
            {/* <div className="divide-border bg-background absolute inset-0 -z-10 grid grid-cols-4 divide-x divide-dashed md:grid-cols-6">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="hidden md:block"></div>
              <div className="hidden md:block"></div>
            </div> */}
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
