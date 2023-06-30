import { getNewsletter } from "@/services/newsletters"
import SimpleTemplate from "../../templates/simple"

interface Props{
    searchParams: {
        newsletterId: string
    },
}  

export default async function PreviewPage({ searchParams }: Props) {
    const newsletterId= searchParams.newsletterId
    const newsletter= await getNewsletter(newsletterId)
    if (!newsletter) return <div>Newsletter not found, id: {newsletterId}</div>

    return (
    <SimpleTemplate title={newsletter.title} text={newsletter.text} name="juancito"/>
  )
}
