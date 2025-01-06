import React from 'react'

const Footer = () => {
  return (
    <div className="bg-yellow-300 p-4 rounded-lg shadow-lg mt-8">
      <div className="text-center text-purple-600 mb-4">
        <span className="text-2xl font-bold text-green-500">Randamly</span>
        <p className="text-lg text-blue-500">Randomness at its finest! 🤪</p>
      </div>
      
      <div className="flex justify-center space-x-6">
        <a 
          href="https://www.instagram.com"
          className="text-purple-700 font-semibold hover:text-pink-500 hover:scale-110 transition-transform duration-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Instagram 📸
        </a>
        <a 
          href="https://www.twitter.com"
          className="text-purple-700 font-semibold hover:text-pink-500 hover:scale-110 transition-transform duration-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Twitter 🐦
        </a>
        <a 
          href="https://www.facebook.com"
          className="text-purple-700 font-semibold hover:text-pink-500 hover:scale-110 transition-transform duration-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Facebook 📘
        </a>
      </div>

      <div className="mt-4 text-center text-purple-700">
        <p className="text-sm">
          Made with ❤️ by the RandomStuff Team
        </p>
      </div>
    </div>
  )
}

export default Footer
