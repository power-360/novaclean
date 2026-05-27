# Boilerplate Next.js Site Vitrine -> Web App

Boilerplate prêt à l'emploi pour lancer rapidement un site vitrine en **Next.js** et le faire évoluer progressivement vers une application web.

## Stack incluse

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui (composants installés: `button`, `card`, `input`, `label`, `textarea`)
- Formulaire de contact + API route
- Envoi d'email via Resend
- Template email React prêt à l'usage
- Dashboard complet prêt à brancher sur tes donnees

## Démarrage

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Variables d'environnement

Définir dans `.env.local`:

- `RESEND_API_KEY`: clé API Resend
- `RESEND_FROM_EMAIL`: expéditeur (doit être validé côté Resend en production)
- `CONTACT_TO_EMAIL`: destinataire qui recevra les messages du formulaire

Exemple:

```env
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL=info@power360.ch
CONTACT_TO_EMAIL=info@novaclean-services.ch
```

`CONTACT_TO_EMAIL` doit contenir une adresse email valide. Pour envoyer le
message à plusieurs destinataires, séparer les adresses par des virgules:

```env
CONTACT_TO_EMAIL=info@novaclean-services.ch,admin@novaclean-services.ch
```

Après toute modification du fichier `.env.local`, redémarrer le serveur Next
pour que les nouvelles valeurs soient prises en compte.

## Points clés du boilerplate

- Formulaire contact: `app/components/ContactForm.tsx`
- API d'envoi: `app/api/contact/route.ts`
- Template email: `app/emails/ContactEmail.tsx`
- Dashboard: `app/dashboard/page.tsx`

## Vérification rapide

1. Lancer l'app avec `npm run dev`
2. Ouvrir `http://localhost:3000`
3. Ouvrir aussi `http://localhost:3000/dashboard`
4. Envoyer le formulaire de contact
5. Vérifier la réception de l'email sur `CONTACT_TO_EMAIL`

## Évolution vers une web app

Base prévue pour ajouter rapidement:

- Authentification (Clerk, Auth.js, Supabase, etc.)
- Espace admin/dashboard
- Paiement (Stripe)
- CMS headless
- API métier
