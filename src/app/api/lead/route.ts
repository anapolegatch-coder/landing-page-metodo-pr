import { NextResponse } from "next/server";
import { deliverLead } from "@/lib/lead-delivery";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Recebe o formulário da página /guia e repassa o lead ao MailerLite.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false }, { status: 400 });

  // Campo isca preenchido: é robô. Responde ok sem cadastrar.
  if (String(body.company ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const firstName = String(body.firstName ?? "").trim().slice(0, 80);
  const lastName = String(body.lastName ?? "").trim().slice(0, 80);
  const email = String(body.email ?? "").trim().toLowerCase().slice(0, 254);

  if (!firstName || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ ok: false }, { status: 422 });
  }

  try {
    await deliverLead({ firstName, lastName, email });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead] falha ao entregar lead", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
