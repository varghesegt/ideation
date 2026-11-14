import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Ideation Education Services | Study abroad, thoughtfully",
  description:
    "Plan your study abroad journey with personal, end-to-end guidance from Ideation Education Services.",
  icons: {
    icon: `${basePath}/images/favicon-64.png`,
    shortcut: `${basePath}/images/favicon-64.png`,
    apple: `${basePath}/images/favicon-64.png`,
  },
  openGraph: {
    title: "Ideation Education Services — Your world of possibility",
    description:
      "Thoughtful study abroad guidance, from your first conversation to your first day on campus.",
    url: "https://ideationedu.com/",
    siteName: "Ideation Education Services",
    images: [
      {
        url: `${basePath}/images/logo-dark.png`,
        width: 279,
        height: 291,
        alt: "Ideation Education Services Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f7f9fc" />
      </head>
      <body className="antialiased bg-[#f7f9fc] text-[#172b43] selection:bg-[#1a56db] selection:text-white">
        {children}
      </body>
    </html>
  );
}
