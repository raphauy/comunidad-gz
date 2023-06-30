"use client"

import { toast } from "@/components/ui/use-toast"

interface Props{
    message: string
    error?: boolean
}
export default function Notifyer({ message, error }: Props) {
    toast({
        variant: error ? "destructive": "default",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <p className="text-xl text-white">{message}</p>
          </pre>
        ),
      })

  return (
    <div></div>
  )
}
