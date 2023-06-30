import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { sendEmail } from "@/services/mailing"
import { redirect } from "next/navigation"
import Notifyer from "../notifyer"
import { Select } from "@/components/ui/select"
import getNewsletters from "@/services/newsletters"

interface Props{
    searchParams: {
      id: string
    }
  }
  
export default async function SendPage({ searchParams }: Props) {
    const id= searchParams.id

    const newsletters= await getNewsletters()

    async function handleSend(form: FormData){
        "use server"
        const email= form.get("mail") as string
        const name= form.get("name") as string
        const newsletterId= form.get("newsletter") as string
    
        console.log(name);
        console.log(email);
        const id= await sendEmail(newsletterId, name, email)

        redirect(`/mailing/send?id=${id}`)
      }


    
      return (
        <div className="flex flex-col items-center gap-4 mt-5">
          <p className="text-xl font-bold text-muted-foreground">Send Email</p>
          <form action={handleSend} className="flex flex-col gap-3 w-96">
            <p className="text-lg">Name:</p>
            <Input name="name"/>
            <p className="text-lg">Mail:</p>
            <Input name="mail" type="email"/>
            <div className="mb-4">
              <select name='newsletter' className="w-full p-2 border border-gray-300 rounded">              
                {newsletters.map((newsletter) => (
                  <option key={newsletter.id} value={newsletter.id}>
                    {newsletter.title}
                  </option>
                ))}
              </select>
            </div>
            <Button className="w-full mt-5">Send</Button>
          </form>
          
          {id && id !== "error" && <Notifyer message={`Mail sent, id: ${id}`}/>}
          {id && id === "error" && <Notifyer message="Something went wrong"/>}
        </div>
      )
}
