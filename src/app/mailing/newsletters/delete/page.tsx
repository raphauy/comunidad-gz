import { Separator } from '@/components/ui/separator'
import React from 'react'
import DeleteForm from './deleteForm'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { deleteNewsletter, getNewsletter } from '@/services/newsletters'
import { Newsletter } from '@prisma/client'

interface Props{
    searchParams: {
        newsletterId: string
    }
}
  
export default async function DeletePage({ searchParams }: Props) {
    const newsletterId= searchParams.newsletterId
  
    const newsletter= await getNewsletter(newsletterId)
   
    if (newsletter === null) redirect(`/mailing/newsletters?refresh=${new Date().getMilliseconds()}`)

    async function eliminate(): Promise<Newsletter | null> {
        "use server"
        
        const deleted= newsletter && await deleteNewsletter(newsletter.id)

        revalidatePath("/mailing/newsletters")

        return deleted
    }


    return (
        <div className="flex flex-col items-center w-full my-5 space-y-6">
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-medium text-center">Delete Newsletter {newsletter.title}</h3>

                <Separator className="my-5" />
                
                <p className="mb-5 text-lg">This operation cannot be undone</p>

                <DeleteForm eliminate={eliminate} />
            </div>
        
        </div>
    )
}