/**
 * Entrega do lead ao MailerLite.
 *
 * O site só cadastra o assinante no grupo do material. Quem envia o e-mail com
 * o guia é a automação do MailerLite com gatilho "entrou no grupo".
 *
 * Variáveis de ambiente (configurar na Vercel > Settings > Environment Variables):
 *  - MAILERLITE_API_KEY: token criado em MailerLite > Integrations > API
 *  - MAILERLITE_GROUP_ID: ID do grupo que dispara a automação
 */

export type Lead = {
  firstName: string;
  lastName: string;
  email: string;
};

const API_URL = "https://connect.mailerlite.com/api/subscribers";

export async function deliverLead(lead: Lead): Promise<void> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    // Em desenvolvimento, permite testar a página sem a chave configurada.
    if (process.env.NODE_ENV !== "production") {
      console.info("[lead] MailerLite não configurado, lead recebido:", lead);
      return;
    }
    throw new Error("MAILERLITE_API_KEY ou MAILERLITE_GROUP_ID ausente");
  }

  // Cria ou atualiza o assinante e o adiciona ao grupo.
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email: lead.email,
      fields: { name: lead.firstName, last_name: lead.lastName },
      groups: [groupId],
    }),
  });

  if (!res.ok) {
    throw new Error(`MailerLite respondeu ${res.status}: ${await res.text()}`);
  }
}
