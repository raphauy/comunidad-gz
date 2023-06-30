import { revalidatePath } from "next/cache";
import { Separator } from "@/components/ui/separator";
import { editNewsletter, getNewsletter } from "@/services/newsletters";
import { Newsletter } from "@prisma/client";
import { NewsletterForm, NewsletterFormValues } from "../add/newsletterForm";


export const revalidate= 0

interface Props{
    searchParams: {
        newsletterId: string
    },
}  

export default async function EditPage({ searchParams }: Props) {
    
    const newsletterId= searchParams.newsletterId
    const newsletter= await getNewsletter(newsletterId)

    if (!newsletter) return <div>Newsletter not found, id: {newsletterId}</div>
 

    async function editData(data: NewsletterFormValues): Promise<Newsletter | null> {
    "use server"

    const edited= await editNewsletter(newsletterId, data)    

    revalidatePath("/mailing/newsletters")
    
    return edited
    }

    return (
    <div className="flex flex-col items-center my-10 space-y-6">
        <div className="min-w-[600px]">
        <h3 className="text-lg font-medium text-center">Editar Newsletter</h3>

        <Separator className="my-5" />

        <NewsletterForm processData={editData} newsletter={newsletter} />        
        
        </div>
        
    </div>
    )
}