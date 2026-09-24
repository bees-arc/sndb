import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "NDB Securities | Premier Stockbroking & Capital Markets Portal",
  description: "Official portal of NDB Securities (Pvt) Ltd. Licensed by the Securities and Exchange Commission of Sri Lanka (SEC) and full trading member of the Colombo Stock Exchange (CSE). Direct DMA equities, corporate debt, and paperless e-KYC onboarding.",
  keywords: "NDB Securities, NDBS, Colombo Stock Exchange, CSE, Sri Lanka Stock Market, CDS Account, Invest in Sri Lanka, Stockbroker Sri Lanka, Atrad, NDB Bank",
};

import Providers from "@/components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
