import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
          <div className="page-background relative flex min-h-screen flex-col">
            <div className="divide-border absolute inset-0 z-0 grid grid-cols-4 divide-x divide-dashed md:grid-cols-6">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="hidden md:block"></div>
              <div className="hidden md:block"></div>
            </div>
            <main className="flex-1 pb-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
