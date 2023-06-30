import SimpleTemplate from '@/app/mailing/templates/simple';
import { Resend } from 'resend'
import { getNewsletter } from './newsletters';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(newsletterId: string, name: string, mail: string) {
  const newsletter= await getNewsletter(newsletterId)
  if (!newsletter) throw new Error()
  const title= newsletter.title
  const text= newsletter.text

try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: mail,
      subject: "Primer mail con React",
      react: SimpleTemplate({ title, text, name})
      //react: EmailTemplate({ firstName: "Gabi" }),
    })
    console.log("Mails enviado!")    
    console.log(data)
    return data.id
    
  } catch (error) {
    console.log(error)    
    return "error"
  }
}