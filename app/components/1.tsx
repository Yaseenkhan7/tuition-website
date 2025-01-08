import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <div className="bg-indigo-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white sm:text-4xl mb-8 text-center">
          <span className="block">Ready to boost your academic performance?</span>
          <span className="block text-indigo-300 mt-2">Join VS TUITIONS today.</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="w-full sm:w-auto bg-white text-indigo-700 hover:bg-indigo-50">
            Enroll Now
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-indigo-600">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

