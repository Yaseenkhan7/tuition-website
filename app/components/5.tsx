'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Book, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">VS TUITIONS</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link href="#" className="text-gray-700 hover:text-indigo-600">Courses</Link>
            <Link href="#" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link href="#" className="text-gray-700 hover:text-indigo-600">Contact</Link>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="text-gray-700 hover:text-indigo-600">Home</Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-600">Courses</Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-600">About</Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-600">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

