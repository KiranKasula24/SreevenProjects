// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { sendInquiryNotifications } from "@/lib/email";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  source?: "general" | "booking";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const projectType = (body.projectType ?? "").trim();
    const budget = (body.budget ?? "").trim();
    const message = (body.message ?? "").trim();
    const source = body.source || "general";

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // Generate inquiry ID
    const inquiryId = `INQ-${Date.now().toString().slice(-8)}`;

    // Prepare inquiry data
    const inquiryData = {
      inquiryId,
      name,
      email,
      phone,
      projectType,
      budget,
      message,
      source,
    };

    // Log to console (can save to file later)
    console.log("[INQUIRY RECEIVED]", {
      ...inquiryData,
      timestamp: new Date().toISOString(),
      ip:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip"),
      userAgent: request.headers.get("user-agent"),
    });

    // Send email notifications
    const emailResult = await sendInquiryNotifications(inquiryData);

    if (!emailResult.success) {
      console.error("[EMAIL ERROR]", emailResult.error);
      // Still return success to user, but log the error
      return NextResponse.json(
        {
          ok: true,
          inquiryId,
          warning: "Inquiry received but email notification may have failed",
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        inquiryId,
        message:
          "Your inquiry has been submitted successfully. Check your email for confirmation.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[API ERROR]", error);
    return NextResponse.json(
      { error: "Unable to process your request. Please try again." },
      { status: 500 },
    );
  }
}
