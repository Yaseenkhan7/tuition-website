import { BookOpen, Users, Award } from 'lucide-react'

const features = [
  {
    name: 'Expert Tutors',
    description: 'Learn from highly qualified and experienced educators.',
    icon: Users
  },
  {
    name: 'Comprehensive Curriculum',
    description: 'Cover all aspects of your syllabus with our well-structured courses.',
    icon: BookOpen
  },
  {
    name: 'Proven Results',
    description: 'Our students consistently achieve top grades and academic success.',
    icon: Award
  }
]

export default function Features() {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose VS TUITIONS?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-xl text-gray-500">
            We provide the tools and support you need to excel in your studies.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                  <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

