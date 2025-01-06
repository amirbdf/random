import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="bg-yellow-300 p-4 rounded-lg shadow-lg">
      <div className="text-3xl font-bold text-center text-purple-600 mb-4">
        <span className="text-4xl text-green-500">Randamly</span>
        <span className="text-sm text-blue-500">— Your Random Fun Zone!</span>
      </div>
      
      <ul className="flex space-x-6 justify-center">
        <li className="hover:text-pink-500 hover:scale-110 transition-transform duration-300">
          <Link href="/" className="font-semibold text-lg text-purple-700">
            Home 🏠
          </Link>
        </li>
        <li className="hover:text-pink-500 hover:scale-110 transition-transform duration-300">
          <Link href="/about" className="font-semibold text-lg text-purple-700">
            About 🤔
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
