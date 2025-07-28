import Footer from "@/components/templates/landing/home/footer";
import Header from "@/components/templates/landing/home/header";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full bg-zinc-900 flex flex-col justify-start items-start overflow-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
