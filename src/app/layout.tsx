import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ideationedu.com"),
  title: {
    default: "Ideation Edu Services | Study Abroad Experts — Plan Your Global Education Journey",
    template: "%s | Ideation Edu Services",
  },
  description:
    "Empowering students to achieve their international education dreams since 2015. Free personalized counseling, university shortlisting, visa processing & end-to-end study abroad support across 25+ countries including USA, UK, Canada, Australia & Europe.",
  keywords: [
    "study abroad",
    "overseas education",
    "education consultancy",
    "university shortlisting",
    "visa processing",
    "study in USA",
    "study in UK",
    "study in Canada",
    "study in Australia",
    "study in Germany",
    "free counseling",
    "education abroad",
    "international education",
    "scholarship guidance",
    "student visa",
    "Ideation Edu Services",
  ],
  authors: [{ name: "Ideation Edu Services" }],
  creator: "Ideation Edu Services",
  publisher: "Ideation Edu Services",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ideationedu.com",
    siteName: "Ideation Edu Services",
    title: "Ideation Edu Services | Study Abroad Experts",
    description:
      "Free personalized counseling & end-to-end study abroad support across 25+ countries. Trusted by 1000+ students with 98% success rate.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ideation Edu Services — Study Abroad Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideation Edu Services | Study Abroad Experts",
    description:
      "Free personalized counseling & end-to-end study abroad support across 25+ countries.",
    images: ["/og-image.png"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-sans antialiased selection:bg-[var(--color-primary)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
