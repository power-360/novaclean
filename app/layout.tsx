import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boilerplate Vitrine Next.js",
  description:
    "Boilerplate Next.js pour site vitrine evolutif vers application web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
