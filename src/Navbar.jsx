import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-xl fixed w-full z-10 top-0 left-0 border-b border-gray-200/30 shadow-sm">
      {/* backdrop-blur-xl = "Apple Glass Look" */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="font-semibold hover:text-red-600 transition text-lg sm:text-xl flex items-center gap-2 text-gray-900"
        >
          <i className="fa-solid fa-shield-halved"></i>
          <span className="hidden sm:inline">Versicherung</span>
          <span className="sm:hidden">Vers.</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-gray-700 focus:outline-none"
        >
          <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 text-gray-700">
          <li>
            <Link 
              to="/" 
              className="px-3 py-1 rounded-md transition-all duration-200 hover:bg-blue-100 hover:text-blue-700"
            >
              Home
            </Link>
          </li>

          <li>
            <Link 
              to="/about" 
              className="px-3 py-1 rounded-md transition-all duration-200 hover:bg-blue-100 hover:text-blue-700"
            >
              Über uns
            </Link>
          </li>

          <li>
            <Link 
              to="/contact" 
              className="px-3 py-1 rounded-md transition-all duration-200 hover:bg-blue-100 hover:text-blue-700"
            >
              Kontakt
            </Link>
          </li>
        </ul>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200/30">
          <ul className="flex flex-col gap-4 px-4 py-4 text-gray-700">
            <li>
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:bg-blue-100 hover:text-blue-700 rounded-md transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:bg-blue-100 hover:text-blue-700 rounded-md transition"
              >
                Über uns
              </Link>
            </li>

            <li>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:bg-blue-100 hover:text-blue-700 rounded-md transition"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar
