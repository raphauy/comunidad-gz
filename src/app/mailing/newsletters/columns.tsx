"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { FileSearch, ArrowUpDown, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { Markdown } from "./preview/markdown"

export type Newsletter = {
  id: string
  title: string
  text: string
}

export const columns: ColumnDef<Newsletter>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Nombre
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
  },
  {
    accessorKey: "text",
    header: ({ column }) => {
        return (
          <Button variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Bodega
            <ArrowUpDown className="w-4 h-4 ml-2" />
          </Button>
        )
    },
    cell: ({ row }) => {
      const newsletter = row.original     
 
      return (
        <Markdown
          markdownCustomStyles={{
            h2: { color: "#35472A", fontSize: "20px", fontWeight: "bold", margin: "16px 0px 2px 0px" },
          }}
          markdownContainerStyles={{
            padding: "18px",
            textAlign: "justify",
            color: "#6B7280"
          }}
        >
          {newsletter.text}
        </Markdown>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const newsletter = row.original     
 
      return (
        <div className="flex items-center justify-end gap-2">
          <Link href={`/mailing/newsletters/edit?newsletterId=${newsletter.id}`} className="flex items-center">
            <Edit className=" text-sky-400"/>
          </Link>
          <Link href={`/mailing/newsletters/delete?newsletterId=${newsletter.id}`} className="flex items-center">
              <Trash2 className="text-red-400"/>
          </Link>
          <Link href={`/mailing/newsletters/preview?newsletterId=${newsletter.id}`} className="flex items-center">
              <FileSearch/>
          </Link>
        </div>
      )
    },
  },
]
