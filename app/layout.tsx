import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CopyToastProvider } from "@/components/copy-toast";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aran Bruce-Caddick | Personal Website",
  description:
    "Aran Bruce-Caddick's personal website - Product builder, code enthusiast and data nerd who's deeply AI-curious",
  keywords: [
    "Aran Bruce-Caddick",
    "product builder",
    "developer",
    "AI",
    "Crezco",
  ],
  authors: [{ name: "Aran Bruce-Caddick" }],
  creator: "Aran Bruce-Caddick",
  metadataBase: new URL("https://www.aranbc.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aranbc.com",
    title: "Aran Bruce-Caddick | Personal Website",
    description:
      "Product builder, code enthusiast and data nerd who's deeply AI-curious",
    siteName: "Aran Bruce-Caddick",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aran Bruce-Caddick | Personal Website",
    description:
      "Product builder, code enthusiast and data nerd who's deeply AI-curious",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background font-sans antialiased`}>
        <ThemeProvider>
          <CopyToastProvider>
            <Header />
            <div className="relative flex min-h-screen flex-col">
              <main className="z-1 flex-1">{children}</main>
              <Footer />
            </div>
          </CopyToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
