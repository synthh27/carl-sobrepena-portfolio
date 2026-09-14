import { Montserrat, Inter, Nunito} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

// Display serif — used sparingly for headlines and the entry numerals
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body copy
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "800"],
  display: "swap",
});

// Utility / ledger labels, KPI figures, nav eyebrows

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "800"],
  display: "swap",
});

// TODO: replace with your real production domain once you have one.
// metadataBase is required for Next.js to resolve relative OG/Twitter image
// paths into absolute URLs.
const siteUrl = "https://your-domain.vercel.app";
const siteName = "Carl Sobrepeña — Full-Stack Digital Marketing Strategist";
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
  authors: [{ name: "Carl Sobrepeña" }],
  creator: "Carl Sobrepeña",
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
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${nunito.variable}`}>
      <body className="font-body bg-paper-dim text-ink antialiased">
        <Navbar />  
        {children}
      </body>
    </html>
  );
}
