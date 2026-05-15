import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nova Clean Services | Nettoyage en Suisse romande",
  description:
    "Nova Clean Services propose des prestations de nettoyage pour particuliers, entreprises et régies en Suisse romande : fin de bail, conciergerie, locaux professionnels, chantiers, extérieurs et interventions exceptionnelles.",
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
