import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IPL Guessing Game",
  description: "Can you guess the IPL player based on the teams they've played for?",
};

import { ConvexClientProvider } from "@/components/ConvexClientProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
