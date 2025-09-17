import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const urbanist = Urbanist({ subsets: ["latin"] });

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
      <body className={`${urbanist.className} bg-background`}>
        <ThemeProvider>
          <Header />
          {/* Fade mask overlay */}
          <div className="fade-mask fade-mask-header pointer-events-none fixed top-0 left-0 z-5 h-14 w-full" />
          <div className="page-background relative flex h-screen min-h-screen flex-col">
            {/* Background dots pattern */}
            <div className="mask-pattern dots-pattern dots-center pointer-events-none absolute top-0 left-0 flex min-h-2/3 w-screen min-w-0 overflow-hidden" />
            <main className="z-1 flex-1 pb-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
