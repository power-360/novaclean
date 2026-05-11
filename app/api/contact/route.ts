import { NextResponse } from "next/server";
import { Resend } from "resend";

import { ContactEmail } from "@/emails/ContactEmail";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
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
          "Configuration manquante : RESEND_API_KEY et CONTACT_TO_EMAIL doivent être définies.",
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
  const phone = payload.phone?.trim() ?? "";
  const service = payload.service?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (
    name.length < 2 ||
    message.length < 10 ||
    phone.length < 6 ||
    service.length < 3 ||
    !isValidEmail(email)
  ) {
    return NextResponse.json(
      { message: "Données invalides. Vérifiez nom, email, téléphone, service et message." },
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
      phone,
      service,
      message,
    }),
  });

  if (error) {
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email. Veuillez réessayer." },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { message: "Message envoyé avec succès." },
    { status: 200 },
  );
}
