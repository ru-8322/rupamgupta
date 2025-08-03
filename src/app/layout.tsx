import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rupam Gupta | Full Stack Developer",
    template: "%s | Rupam Gupta"
  },
  description: "Professional portfolio of Rupam Gupta, showcasing full stack development projects and expertise in modern web technologies.",
  keywords: [
    "Rupam Gupta",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Angular",
    "Next.js",
    "Node.js",
    "Portfolio"
  ],
  authors: [{ name: "Rupam Gupta", url: "https://rupamgupta.vercel.app/" }],
  creator: "Rupam Gupta",
  publisher: "Rupam Gupta",
  metadataBase: new URL("https://rupamgupta.vercel.app/"),
  openGraph: {
    title: "Rupam Gupta | Full Stack Developer",
    description: "Professional portfolio of Rupam Gupta, showcasing full stack development projects and expertise in modern web technologies.",
    url: "https://rupamgupta.vercel.app/",
    siteName: "Rupam Gupta Portfolio",
    images: [
      {
        url: "/coding.png",
        width: 1200,
        height: 630,
        alt: "Rupam Gupta Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupam Gupta | Full Stack Developer",
    description: "Professional portfolio of Rupam Gupta, showcasing full stack development projects and expertise in modern web technologies.",
    images: ["/coding.png"],
    creator: "@rupamgupta",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#3b82f6",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
