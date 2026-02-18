import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export type ContactEmailProps = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export function ContactEmail({ name, email, company, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message depuis votre site vitrine</Preview>
      <Body style={{ backgroundColor: "#f6f8fb", fontFamily: "Arial, sans-serif", margin: 0 }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            margin: "24px auto",
            maxWidth: "620px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            overflow: "hidden",
          }}
        >
          <Section style={{ backgroundColor: "#111827", color: "#ffffff", padding: "20px 24px" }}>
            <Heading as="h1" style={{ fontSize: "20px", margin: 0 }}>
              Nouveau message de contact
            </Heading>
          </Section>

          <Section style={{ padding: "24px" }}>
            <Text style={{ margin: "0 0 8px" }}>
              <strong>Nom :</strong> {name}
            </Text>
            <Text style={{ margin: "0 0 8px" }}>
              <strong>Email :</strong> {email}
            </Text>
            <Text style={{ margin: "0 0 16px" }}>
              <strong>Entreprise :</strong> {company?.trim() ? company : "Non renseignee"}
            </Text>

            <Hr style={{ borderColor: "#e5e7eb", margin: "16px 0" }} />

            <Text style={{ margin: "0 0 8px" }}>
              <strong>Message :</strong>
            </Text>
            <Text style={{ whiteSpace: "pre-wrap", margin: 0 }}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
