
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (
            !name?.trim() ||
            !email?.trim() ||
            !message?.trim()
        ) {
            return Response.json(
                { success: false, message: "All fields are required." },
                { status: 400 }
            );
        }

        if (
            name.length > 100 ||
            email.length > 254 ||
            message.length > 5000 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            return Response.json(
                { success: false, message: "Invalid form data." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact: ${name.trim()}`,
            text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
        });

        return Response.json({
            success: true,
            message: "Message sent successfully!",
        });
    } catch (error) {
        console.error("Contact form error:", error);

        return Response.json(
            { success: false, message: "Failed to send message." },
            { status: 500 }
        );
    }
}