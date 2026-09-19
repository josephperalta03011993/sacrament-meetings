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

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner",
  description: "Plan and view sacrament meeting programs",
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