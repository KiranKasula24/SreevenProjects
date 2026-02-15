import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sreeven Projects",
  description:
    "Building tomorrow's landmarks today. Expert residential, commercial, renovation, and infrastructure construction services with precision, quality, and divine dedication.",
  keywords: ["construction", "engineering", "architecture", "residential construction", "commercial construction", "infrastructure", "Hyderabad", "Sreeven Projects"],
  authors: [{ name: "Sreeven Projects" }],
  openGraph: {
    title: "Sreeven Projects | Engineering Excellence",
    description: "Where divine vision meets engineering excellence. Transform your construction dreams into reality.",
    type: "website",
  },
};

const bodyClassNames = [
  plusJakarta.variable,
  manrope.variable,
  "antialiased",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={bodyClassNames.join(" ")}>{children}</body>
    </html>
  );
}
