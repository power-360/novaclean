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
const contactToEmail =
  process.env.CONTACT_TO_EMAIL ?? "info@novaclean-services.ch";
const fromEmail = process.env.RESEND_FROM_EMAIL ?? "info@power360.ch";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getEmailAddress(recipient: string) {
  const trimmedRecipient = recipient.trim();
  const namedRecipient = trimmedRecipient.match(/^[^<>]+<([^<>]+)>$/);

  return (namedRecipient?.[1] ?? trimmedRecipient).trim();
}

function isValidRecipient(recipient: string) {
  return isValidEmail(getEmailAddress(recipient));
}

function getRecipientList(value: string) {
  return value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function getSender(value: string) {
  return isValidEmail(value) ? `NovaClean Services <${value}>` : value;
}

function getEmailDomain(recipient: string) {
  return getEmailAddress(recipient).split("@").at(1) ?? "invalid";
}

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      {
        message:
          "Configuration manquante : RESEND_API_KEY doit être définie.",
      },
      { status: 500 },
    );
  }

  const recipients = getRecipientList(contactToEmail);
  const sender = getSender(fromEmail);

  if (
    recipients.length === 0 ||
    recipients.some((recipient) => !isValidRecipient(recipient)) ||
    !isValidRecipient(sender)
  ) {
    return NextResponse.json(
      {
        message:
          "Configuration email invalide : vérifiez CONTACT_TO_EMAIL et RESEND_FROM_EMAIL.",
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
      {
        message:
          "Données invalides. Vérifiez nom, email, téléphone, service et message.",
      },
      { status: 400 },
    );
  }

  let sendError: unknown = null;

  try {
    const { error } = await resend.emails.send({
      from: sender,
      to: recipients,
      subject: `Contact depuis le site internet - ${name}`,
      replyTo: email,
      react: ContactEmail({
        name,
        email,
        phone,
        service,
        message,
      }),
    });

    sendError = error;
  } catch (error) {
    sendError = error;
  }

  if (sendError) {
    console.error("Resend contact email failed", {
      error: sendError,
      fromDomain: getEmailDomain(sender),
      toDomains: recipients.map(getEmailDomain),
      hasReplyTo: Boolean(email),
    });

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
