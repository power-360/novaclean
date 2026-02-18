import { NextResponse } from "next/server";
import { Resend } from "resend";

import { ContactEmail } from "@/emails/ContactEmail";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL;
const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  if (!resend || !toEmail) {
    return NextResponse.json(
      {
        message:
          "Configuration manquante: RESEND_API_KEY et CONTACT_TO_EMAIL doivent etre definies.",
      },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Payload JSON invalide." },
      { status: 400 },
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (name.length < 2 || message.length < 10 || !isValidEmail(email)) {
    return NextResponse.json(
      { message: "Donnees invalides. Verifiez nom, email et message." },
      { status: 400 },
    );
  }

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: `Nouveau message site vitrine - ${name}`,
    replyTo: email,
    react: ContactEmail({
      name,
      email,
      company,
      message,
    }),
  });

  if (error) {
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email. Veuillez reessayer." },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { message: "Message envoye avec succes." },
    { status: 200 },
  );
}
