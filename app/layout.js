import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Display serif — used sparingly for headlines and the entry numerals
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body copy
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Utility / ledger labels, KPI figures, nav eyebrows
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

// TODO: replace with your real production domain once you have one.
// metadataBase is required for Next.js to resolve relative OG/Twitter image
// paths into absolute URLs.
const siteUrl = "https://your-domain.vercel.app";
const siteName = "Your Name — Full-Stack Digital Marketing Strategist";
const siteDescription =
  "Full-stack digital marketing for high-value service and F&B businesses — strategy, campaigns, and systems built to grow revenue, not just traffic.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | " + siteName,
  },
  description: siteDescription,
  keywords: [
    "digital marketing agency",
    "full-stack marketing strategist",
    "F&B marketing",
    "service business marketing",
    "growth marketing",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#12211c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body bg-ink text-paper antialiased">{children}</body>
    </html>
  );
}
