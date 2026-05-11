"use client";

import { FormEvent, useState } from "react";

import { serviceSelectOptions } from "@/components/landing/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = {
  type: "success" | "error";
  message: string;
} | null;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: { message?: string } = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Une erreur est survenue.");
      }

      setStatus({
        type: "success",
        message: data.message ?? "Message envoyé avec succès.",
      });
      event.currentTarget.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Impossible d'envoyer le message.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-2">
        <Label htmlFor="name">Nom</Label>
        <Input
          id="name"
          name="name"
          required
          minLength={2}
          placeholder="Votre nom complet"
          className="h-11 border-slate-300 bg-white"
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@entreprise.ch"
            className="h-11 border-slate-300 bg-white"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+41 ..."
            className="h-11 border-slate-300 bg-white"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="service">Service souhaité</Label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        >
          <option value="" disabled>
            Sélectionnez un service
          </option>
          {serviceSelectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          placeholder="Parlez-nous de votre besoin, de la surface et du délai souhaité."
          className="border-slate-300 bg-white"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="h-11 rounded-full bg-slate-900 px-6 text-sm font-semibold hover:bg-slate-800"
      >
        {isLoading ? "Envoi en cours..." : "Envoyer"}
      </Button>

      {status ? (
        <p
          className={
            status.type === "success"
              ? "text-sm font-medium text-emerald-700"
              : "text-sm font-medium text-red-600"
          }
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
