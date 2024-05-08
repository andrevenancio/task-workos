import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ClientProvider } from "@/state/client-provider"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Task WorkOS",
  description: "Task WorkOS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClientProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClientProvider>
  )
}
