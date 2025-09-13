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
      <body className={urbanist.className}>
        <ThemeProvider>
          <Header />
          {/* Fade mask overlay */}
          <div
            className="fade-mask pointer-events-none fixed top-0 left-0 z-5 w-full"
            style={
              {
                height: "var(--static-space-80, 58px)",
                "--base-color": "var(--page-background)",
                "--gradient-direction": "180deg",
              } as React.CSSProperties
            }
          />
          <div className="page-background relative flex h-screen min-h-screen flex-col">
            {/* Background dots pattern */}
            <div
              className="mask-pattern absolute top-0 left-0 flex min-h-2/3 w-screen min-w-0 overflow-hidden"
              style={
                {
                  "--mask-position-x": "50%",
                  "--mask-position-y": "30%",
                  "--mask-radius": "100vh",
                } as React.CSSProperties
              }
            >
              <div className="dots-pattern pointer-events-none absolute top-0 left-0 flex h-full min-h-0 w-full min-w-0" />
            </div>
            <main className="flex-1 pb-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
