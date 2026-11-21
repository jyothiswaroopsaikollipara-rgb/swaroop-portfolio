import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swaroop — Software Engineer | AI & Data Engineering",
  description: "Portfolio of Swaroop: software engineering, AI, data engineering, and full-stack development.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Swaroop — Engineering ideas into intelligent solutions",
    description: "Software engineering, AI, data engineering, and full-stack development.",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Swaroop — Software Engineer", description: "Engineering ideas into intelligent solutions." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}