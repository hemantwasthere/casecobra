import type { Metadata } from "next";
import { Recursive } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";
import Providers from "@/providers";
import "./globals.css";

const font = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main className="grainy-light flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
