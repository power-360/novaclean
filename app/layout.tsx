import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title:
    "Nova Clean Services | Nettoyage à Yverdon-les-Bains et dans le Nord vaudois",
  description:
    "Nova Clean Services propose des prestations de nettoyage à Yverdon-les-Bains, dans le Nord vaudois et dans toute la Suisse romande : fin de bail, conciergerie, locaux professionnels, chantiers, extérieurs et interventions exceptionnelles.",
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
