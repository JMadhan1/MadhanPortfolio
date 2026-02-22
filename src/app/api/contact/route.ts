import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        const { error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "jmadhanplacement@gmail.com",
            replyTo: email,
            subject: `New message from ${name} — Portfolio`,
            html: `
                <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; background: #0a0c12; border-radius: 16px; overflow: hidden; border: 1px solid #1e2030;">
                    <div style="background: linear-gradient(135deg, #00d4ff, #b537f2); padding: 32px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -1px;">New Portfolio Message</h1>
                        <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Someone reached out via your portfolio contact form</p>
                    </div>

                    <div style="padding: 32px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 16px 0; border-bottom: 1px solid #1e2030;">
                                    <p style="margin: 0; color: #555; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">From</p>
                                    <p style="margin: 6px 0 0; color: #fff; font-size: 18px; font-weight: 700;">${name}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 16px 0; border-bottom: 1px solid #1e2030;">
                                    <p style="margin: 0; color: #555; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">Reply To</p>
                                    <a href="mailto:${email}" style="margin: 6px 0 0; color: #00d4ff; font-size: 16px; font-weight: 600; text-decoration: none; display: block;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 16px 0;">
                                    <p style="margin: 0; color: #555; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">Message</p>
                                    <p style="margin: 12px 0 0; color: #ccc; font-size: 16px; line-height: 1.7; background: rgba(255,255,255,0.03); padding: 16px; border-radius: 8px; border-left: 3px solid #b537f2;">${message}</p>
                                </td>
                            </tr>
                        </table>

                        <a href="mailto:${email}" style="display: block; margin-top: 32px; padding: 16px; background: linear-gradient(135deg, #00d4ff, #b537f2); border-radius: 12px; text-align: center; color: white; font-weight: 900; text-decoration: none; font-size: 15px; letter-spacing: 1px;">
                            Reply to ${name}
                        </a>
                    </div>

                    <div style="padding: 20px 32px; border-top: 1px solid #1e2030; text-align: center;">
                        <p style="margin: 0; color: #444; font-size: 12px;">Sent via madhan-portfolio.vercel.app</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
