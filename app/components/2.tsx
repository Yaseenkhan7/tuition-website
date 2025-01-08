import { Book, Code, Calculator, FlaskRoundIcon as Flask } from 'lucide-react'
import { Button } from '@/components/ui/button'

const courses = [
  {
    title: 'Mathematics',
    description: 'Master algebra, calculus, and statistics with our expert tutors.',
    icon: Calculator,
    color: 'bg-blue-500'
  },
  {
    title: 'Science',
    description: 'Explore physics, chemistry, and biology through hands-on experiments and in-depth lessons.',
    icon: Flask,
    color: 'bg-green-500'
  },
  {
    title: 'English Literature',
    description: 'Develop critical thinking and writing skills through analysis of classic and contemporary texts.',
    icon: Book,
    color: 'bg-yellow-500'
  },
  {
    title: 'Computer Science',
    description: 'Learn programming, algorithms, and web development from industry professionals.',
    icon: Code,
    color: 'bg-purple-500'
  }
]

export default function Courses() {
  return (
    <div className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`p-4 ${course.color}`}>
                <course.icon className="h-8 w-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4">{course.description}</p>
                <Button variant="outline" className="w-full justify-center text-base sm:text-lg">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

