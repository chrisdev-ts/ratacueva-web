import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Mejora la performance de carga
})

export const metadata: Metadata = {
  title: "Rata Cueva - Gaming Store",
  description: "E-commerce de productos gamers - Encuentra los mejores productos gaming",
  icons: {
    icon: "/landing/home/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}