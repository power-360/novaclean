"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      company: String(formData.get("company") ?? ""),
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
        message: data.message ?? "Message envoye avec succes.",
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
    <Card className="border-zinc-200/60 bg-white/90 shadow-lg backdrop-blur">
      <CardHeader>
        <CardTitle>Parlons de votre projet</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nom</Label>
            <Input id="name" name="name" required minLength={2} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">Entreprise (optionnel)</Label>
            <Input id="company" name="company" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              minLength={10}
              rows={5}
            />
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Envoi en cours..." : "Envoyer"}
          </Button>

          {status ? (
            <p
              className={
                status.type === "success"
                  ? "text-sm text-emerald-700"
                  : "text-sm text-red-600"
              }
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
