import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ideation Education Services | Study abroad, thoughtfully",
  description:
    "Plan your study abroad journey with personal, end-to-end guidance from Ideation Education Services.",
  openGraph: {
    title: "Ideation Education Services — Your world of possibility",
    description:
      "Thoughtful study abroad guidance, from your first conversation to your first day on campus.",
    url: "https://ideationedu.com/",
    siteName: "Ideation Education Services",
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
