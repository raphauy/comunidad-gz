import EmailTemplate from '@/app/mailing/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'hola@gabizimmer.com',
      to: ['rapha.uy@gmail.com', 'gabi@gabizimmer.com'],
      subject: "Primer mail con React",
      react: EmailTemplate({ firstName: "Gabi" }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}