import type React from "react"
import Footer from "@/components/organisms/footer"           
import Header from "@/components/organisms/header"    

export default function ShopLayout({
  children,
}: {  
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-zinc-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
