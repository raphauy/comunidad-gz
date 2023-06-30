import { NewsletterFormValues } from "@/app/mailing/newsletters/add/newsletterForm";
import { prisma } from "@/utils/server/db";

export default async function getNewsletters() {

  const found = await prisma.newsletter.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  })

  return found;
};


export async function getNewsletter(id: string) {

  const found = await prisma.newsletter.findUnique({
    where: {
      id
    },
  })

  return found
}

export async function createNewsletter(data: NewsletterFormValues) {
  
  const created= await prisma.newsletter.create({
    data
  })

  return created
}

export async function editNewsletter(id: string, data: NewsletterFormValues) {
  
  const created= await prisma.newsletter.update({
    where: {
      id
    },
    data
  })

  return created
}

export async function deleteNewsletter(id: string) {
  
  const deleted= await prisma.newsletter.delete({
    where: {
      id
    },
  })

  return deleted
}