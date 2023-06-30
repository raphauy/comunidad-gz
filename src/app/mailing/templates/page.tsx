
import { getNewsletter } from "@/services/newsletters";
import SimpleTemplate from "./simple";

export default async function TemplatesPage() {

  return (
    <div>
      <SimpleTemplate title="Title here" text="Text here" name="juancito" />
    </div>
  )
}
