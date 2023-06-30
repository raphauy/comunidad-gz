"use client"

import LoadingSpinner from "@/components/loadingSpinner";
import clsx from "clsx";
import { Home, LayoutPanelTop, Newspaper, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {

  const path= usePathname()
  if (!path) return <LoadingSpinner />

  const commonClasses= "flex gap-2 items-center py-1 mx-2 rounded hover:bg-gray-200"
  const selectedClasses= "font-bold border-r-2 border-r-first-color"

  const dashboardSelected= path.endsWith("dashboard")
  const dashboard= clsx(commonClasses, dashboardSelected  && selectedClasses)

  const sendSelected= path.endsWith("send")
  const send= clsx(commonClasses, sendSelected  && selectedClasses)

  const newslettersSelected= path.endsWith("newsletters")
  const newsletters= clsx(commonClasses, newslettersSelected  && selectedClasses)

  const templatesSelected= path.endsWith("templates")
  const templates= clsx(commonClasses, templatesSelected  && selectedClasses)

  const pClasses= "hidden sm:block lg:w-36"

  return (
    <>
      <section className="flex flex-col gap-3 py-4 border-r border-r-tinta-vino/50">
        <Link href="/mailing/dashboard" className={dashboard}>
          <Home size={23} />
          <p className={pClasses}>Dashboard</p>                  
        </Link>

        {divider()}

        <Link href="/mailing/send" className={send}>
          <Send size={23} />
          <p className={pClasses}>Send</p>                  
        </Link>

        <Link href="/mailing/newsletters" className={newsletters}>
          <Newspaper size={23} />
          <p className={pClasses}>Newsletters</p>                  
        </Link>

        <Link href="/mailing/templates" className={templates}>
          <LayoutPanelTop size={23} />
          <p className={pClasses}>Templates</p>                  
        </Link>

        {divider()}


      </section>
    </>
  );
}


function divider() {
  return <div className="mx-2 my-5 border-b border-b-tinta-vino/50" />
}
