
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavLinks from "@/components/NavLinks";
import "./globals.css";
import { Geist } from "next/font/google";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const siteUrl = "https://sacrament-meetings-rust-eta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sacrament Meeting Planner",
    template: "%s | Sacrament Meeting Planner",
  },
  description:
    "Plan, manage, and view sacrament meeting schedules and programs.",
  openGraph: {
    title: "Sacrament Meeting Planner",
    description:
      "Plan, manage, and view sacrament meeting schedules and programs.",
    siteName: "Sacrament Meeting Planner",
    type: "website",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${geist.variable}`}>
        <Header />

        <div className="mx-auto max-w-6xl px-6 py-4">
          <NavLinks />
        </div>

        <main className="mx-auto max-w-6xl px-6 py-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}