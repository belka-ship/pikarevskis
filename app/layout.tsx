import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vadim Pikarevskis — Product Leader & AI Builder",
  description:
    "Bridging the gap between 0-to-1 innovation and regulated fintech scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
