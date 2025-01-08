import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="bg-indigo-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
              Unlock Your Potential with VS TUITIONS
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              Expert tutoring to help you excel in your studies and achieve your academic goals.
            </p>
            <Button size="lg" className="w-full sm:w-auto bg-white text-indigo-700 hover:bg-indigo-50">
              Get Started
            </Button>
          </div>
          <div className="flex justify-center items-center bg-white rounded-lg shadow-xl p-4 sm:p-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRAcDewoVMDoL9BxcsYQDuPE78JmLG.png"
              alt="VS TUITIONS Logo"
              width={300}
              height={300}
              className="object-contain w-full h-auto max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

