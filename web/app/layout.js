import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SmoothScroll from "@/components/SmoothScroll";
import HaffuChat from "@/components/HaffuChat";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://hafsanoreen.com"),
  title: {
    default: "Hafsa Noreen Photography | Cinematic Wedding & Family Photographer in Oakville, Burlington, Milton & Halton",
    template: "%s | Hafsa Noreen Photography",
  },
  description:
    "Cinematic natural-light wedding, family, maternity & event photographer in Oakville, Burlington, Milton & Halton Region. Starting at $450 CAD.",
  keywords: [
    "Oakville photographer", "Burlington photographer", "Milton photographer",
    "Halton photographer", "wedding photographer", "family photography", "maternity photography",
  ],
  openGraph: {
    type: "website",
    siteName: "Hafsa Noreen Photography",
    locale: "en_CA",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <SmoothScroll />
        <SiteNav />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <HaffuChat />
      </body>
    </html>
  );
}
