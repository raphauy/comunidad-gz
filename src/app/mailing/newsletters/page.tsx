import getNewsletters from "@/services/newsletters"
import { PlusCircle } from "lucide-react"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import Link from "next/link"

export default async function NewslettersPage() {
    const newsletters= await getNewsletters()

    return (
      <div className="w-full p-5">      
  
        <div className="flex justify-end my-5 text-lg font-semibold text-grey-800">
            <Link href={`/mailing/newsletters/add`} className="flex items-center justify-center py-1 bg-green-400 border border-green-700 rounded-md cursor-pointer w-60 hover:opacity-80 focus-visible:outline-tinta-marron focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                <PlusCircle className="mr-2"/><p>Add Newsletter</p>
            </Link>
        </div>
  
        <div className="container p-3 py-10 mx-auto bg-white border rounded-md">
          <DataTable columns={columns} data={newsletters} />      
        </div>
      </div>
  )
  }
  