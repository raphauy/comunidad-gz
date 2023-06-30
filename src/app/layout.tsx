import '@/styles/globals.css'
import { Metadata } from "next"

import { Toaster } from "@/components/ui/toaster"

import { TailwindIndicator } from "@/components/chadcn/tailwind-indicator"
import { ThemeProvider } from "@/components/chadcn/theme-provider"
import { fontSans } from '@/utils/front/fonts'
import { cn } from "@/lib/utils"
import AuthContext from '@/utils/front/AuthContext'
import { Navbar } from '../components/navbar/navbar'


export const metadata: Metadata = {
  title: "Gabi Z. Comunidad",
  description: "Esta es la comunidad de Gabi Z.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {  
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
          <AuthContext>

            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="container relative flex flex-col min-h-screen text-muted-foreground">
                <Navbar />
                
                <div className="flex flex-col flex-1">
                  {children}                
                  <Toaster />
                </div>
              </div>            
              <TailwindIndicator />
            </ThemeProvider>

          </AuthContext>          
        </body>
      </html>
    </>
  )
}
