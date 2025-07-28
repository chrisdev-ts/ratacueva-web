import Link from "next/link"
import Image from "next/image"

export default function AuthHeader() {
  return (
    <header className="w-full bg-zinc-900">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 lg:py-6">
        <div className="flex justify-start items-center">
          {/* Logo */}
          <Link href="/" className="flex justify-start items-center gap-2 flex-shrink-0">
            <Image
              className="w-8 h-8 lg:w-10 lg:h-10"
              src="/landing/home/logo.png"
              alt="RataCueva Logo"
              width={40}
              height={40}
            />
            <div className="text-neutral-400 text-xl lg:text-3xl font-black font-exo">RataCueva</div>
          </Link>
        </div>
      </div>
    </header>
  )
} 