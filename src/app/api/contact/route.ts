import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const projectType = (body.projectType ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and project message are required." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const inquiryId = `INQ-${Date.now().toString().slice(-8)}`;

    // TODO: Replace this with actual persistence and notification (DB/CRM + email/SMS webhook).
    console.log("[contact-inquiry]", {
      inquiryId,
      name,
      email,
      phone,
      projectType,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        ok: true,
        inquiryId,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}

