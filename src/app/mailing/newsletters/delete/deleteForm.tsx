"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Newsletter } from "@prisma/client"
import { useRouter } from "next/navigation";

interface Props {
  eliminate: () => Promise<Newsletter | null>;
}

export default function DeleteForm({ eliminate }: Props) {
  const router= useRouter()

  async function handleClick() {
    eliminate()

    toast({
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <p className="text-xl text-white">Newsletter deleted</p>
        </pre>
      ),
    })

    router.push(`/mailing/newsletters?refresh=${new Date().getMilliseconds()}`)
  }
  
  return (
    <div>
      <Button
        onClick={() => history.back()}
        type="button"
        variant={"secondary"}
        className="w-32"
      >
        Cancel
      </Button>
      <Button onClick={handleClick} variant="destructive" className="w-32 ml-2">
        Delete
      </Button>
    </div>
  )
}
