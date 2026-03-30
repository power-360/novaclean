import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nova Clean | Nettoyage premium pour particuliers, entreprises et regies",
  description:
    "Nova Clean propose des prestations de nettoyage et d'entretien haut de gamme: fin de bail, conciergerie, locaux professionnels, chantiers, exterieurs et deneigement.",
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
