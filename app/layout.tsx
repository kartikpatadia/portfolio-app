import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "KayPatty",
  description: "Portfolio of Kartik Patadia, Full Stack Developer specializing in .NET, Angular, SQL, and Azure cloud solutions.",
  keywords: "Full Stack Developer, .NET, Angular, SQL, Azure, Healthcare Applications, Kartik Patadia",
  author: "Kartik Patadia",
  openGraph: {
    title: "KayPatty | Full Stack Developer Portfolio",
    description: "Explore Kartik Patadia’s professional projects in .NET, Angular, SQL and Azure.",
    url: "https://kaypatty.com",
    siteName: "KayPatty",
    type: "website"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Lock to dark theme only */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
