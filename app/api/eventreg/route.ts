import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chvamshi03@gmail.com", // your Gmail address
    pass: 'zfie hmte iyxt wyto', // app-specific password
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

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

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const mailOptions = {
      from:"N3Events<chvamshi03@gmail.com>",
      to: email, // Send to user + yourself
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

    const adminMailOptions = {
      from:"N3Events<chvamshi03@gmail.com>",
      to: "communication@n3events.live",
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

    await transporter.sendMail(mailOptions)
    await transporter.sendMail(adminMailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}
