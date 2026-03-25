import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const basierCircle = localFont({
  src: [
    {
      path: "./fonts/basier-circle/basier-circle-regular-webfont/basier-circle-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/basier-circle/basier-circle-regular-italic-webfont/basier-circle-regular-italic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/basier-circle/basier-circle-medium-webfont/basier-circle-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/basier-circle/basier-circle-medium-italic-webfont/basier-circle-medium-italic-webfont.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/basier-circle/basier-circle-semibold-webfont/basier-circle-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/basier-circle/basier-circle-semibold-italic-webfont/basier-circle-semibold-italic-webfont.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/basier-circle/basier-circle-bold-webfont/basier-circle-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/basier-circle/basier-circle-bold-italic-webfont/basier-circle-bold-italic-webfont.woff2",
      weight: "700",
      style: "italic",
    },
  ],
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
      <body className={`${basierCircle.className} bg-background`}>
        <ThemeProvider>
          <Header />
          <div className="relative flex h-screen min-h-screen flex-col">
            <main className="z-1 flex-1 pb-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
