import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold">
          <Link to="/" className="flex items-center gap-2">
            {/* Hier muss ich noch ein Bild einfügen */}
            <span className="text-gray-900">Logo</span>
          </Link>
        </div>

        {/* Desktop-Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">Kontakt</Link>
          <Link to="/account" className="text-gray-700 hover:text-gray-900">Account</Link>
        </div>

        {/* Hamburger für Mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile-Menü */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white/80">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/about" className="block py-2">About</Link>
          <Link to="/contact" className="block py-2">Kontakt</Link>
          <Link to="/account" className="block py-2">Account</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
