import { revalidatePath } from "next/cache";
import { Separator } from "@/components/ui/separator";
import { createNewsletter } from "@/services/newsletters";
import { NewsletterForm, NewsletterFormValues } from "./newsletterForm";
import { Newsletter } from "@prisma/client";


export const revalidate= 0

interface Props{
    params: {
        slug: string
    },
    searchParams: {
        wineId: string
    },
  }  

export default async function AddPage({ params, searchParams }: Props) {

    async function saveData(data: NewsletterFormValues): Promise<Newsletter | null> {
    "use server"
    
    const created= await createNewsletter(data)

    console.log(created);
    
    revalidatePath("/mailing/newsletters")
    
    return created
    }

    return (
    <div className="flex flex-col items-center my-10 space-y-6">
        <div className="min-w-[600px]">
        <h3 className="text-lg font-medium text-center">Add Newsletter</h3>

        <Separator className="my-5" />
        
        <NewsletterForm processData={saveData} />
        
        </div>
        
    </div>
    )
}