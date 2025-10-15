import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, inquiryType } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Determine which coordinator to send to based on inquiry type
    const recipientEmail = "suemecouch@gmail.com"; // Default to Sue
    const ccEmails = [
      "luccadimario@gmail.com",
      "rmecouch@gmail.com",
      "r.f.2012@comcast.net",
    ];

    // Format email content with better HTML formatting
    const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <p style="color: #6b7280;">Delaware County Science Fair Website</p>
            <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">

            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
                <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
            </div>

            <div style="margin-top: 20px;">
                <h3 style="color: #374151;">Message:</h3>
                <p style="white-space: pre-wrap; background-color: #f9fafb; padding: 15px; border-radius: 8px;">${message}</p>
            </div>

            <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="font-size: 12px; color: #9ca3af;">
                This message was sent from the Delaware County Science Fair website contact form.
            </p>
        </div>
        `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Delco Science Fair <onboarding@resend.dev>",
      to: recipientEmail,
      cc: ccEmails,
      replyTo: email,
      subject: `[Delco Science Fair] ${subject}`,
      html: emailHtml,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            "Unable to send email through our system. Please contact the fair coordinators directly:",
          fallbackContacts: [
            { name: "Sue Mecouch", email: "suemecouch@delcosciencefair.org" },
            { name: "Roger Mecouch", email: "rmecouch@delcosciencefair.org" },
            { name: "Bob Fleck", email: "rfleck@delcosciencefair.org" },
          ],
        },
        { status: 500 },
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully! We will get back to you soon.",
        emailId: data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 },
    );
  }
}
