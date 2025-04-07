import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configure nodemailer with your email service
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || "smtp.example.com",
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER || "your-email@example.com",
    pass: process.env.EMAIL_PASSWORD || "your-password",
  },
})

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()

    // Extract form data
    const {
      "first-name": firstName,
      "last-name": lastName,
      company,
      "job-title": jobTitle,
      "country-code": countryCode,
      phone,
      email,
      message,
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || "noreply@yourdomain.com",
      to: email,
      subject: "Registration Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2a4365;">Registration Confirmation</h2>
          <p>Dear ${firstName} ${lastName},</p>
          <p>Thank you for registering for our event. Your registration has been successfully received.</p>
          <p><strong>Registration Details:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Company:</strong> ${company || "N/A"}</li>
            <li><strong>Job Title:</strong> ${jobTitle || "N/A"}</li>
            <li><strong>Contact:</strong> ${countryCode} ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
          </ul>
          ${message ? `<p><strong>Your Message:</strong> ${message}</p>` : ""}
          <p>If you have any questions, please don't hesitate to contact us.</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">
              This is an automated email. Please do not reply to this message.
            </p>
          </div>
        </div>
      `,
    }

    // Send confirmation email
    await transporter.sendMail(mailOptions)

    // Also send notification to admin
    const adminMailOptions = {
      from: process.env.EMAIL_FROM || "noreply@yourdomain.com",
      to: process.env.ADMIN_EMAIL || "admin@yourdomain.com",
      subject: "New Registration Received",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2a4365;">New Registration</h2>
          <p>A new registration has been received:</p>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Company:</strong> ${company || "N/A"}</li>
            <li><strong>Job Title:</strong> ${jobTitle || "N/A"}</li>
            <li><strong>Contact:</strong> ${countryCode} ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
            ${message ? `<li><strong>Message:</strong> ${message}</li>` : ""}
          </ul>
        </div>
      `,
    }

    await transporter.sendMail(adminMailOptions)

    // Return success response
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}

