"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Newsletter } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import SimpleTemplate from "../../templates/simple"

const formSchema = z.object({
  title: z.string()
    .min(2, { message: "Title must be at least 2 characters." }),
  text: z.string()
    .min(2, { message: "Text must be at least 2 characters." }),
})

export type NewsletterFormValues = z.infer<typeof formSchema>

// This can come from your database or API.
const defaultValues: Partial<NewsletterFormValues> = {}

interface Props{
  newsletter?: Newsletter
  processData: (json: NewsletterFormValues) => Promise<Newsletter | null>
}

export function NewsletterForm({ newsletter, processData }: Props) {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  })
  const router= useRouter()


  async function onSubmit(data: NewsletterFormValues) {
    
    const fresh= await processData(data)

    let message= "Newsletter creada 🏁"
    if (newsletter)
      message= "Newsletter editada 🏁"
      
    toast({
      variant: fresh ? "default": "destructive",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <p className="text-xl text-white">{message}</p>
        </pre>
      ),
    })

    fresh && router.push(`/mailing/newsletters?${fresh.id}`)
  }

  useEffect(() => {
    // set fields por edit mode
    if (newsletter) {
      
      form.setValue("title", newsletter.title)
      form.setValue("text", newsletter.text)
    }
  
  }, [form, newsletter])


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-8 bg-white border rounded-md">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Super Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Text</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Text for the Newsletter"                  
                    {...field}
                    rows={10}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> 
          <div className="flex justify-end">
            <Button onClick={() => history.back()} type="button" variant={"secondary"} className="w-32">Cancel</Button>
            <Button type="submit" className="w-32 ml-2" >Save</Button>
          </div>
        </form>
      </Form>
    </div>

  )
}