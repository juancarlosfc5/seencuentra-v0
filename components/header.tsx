"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-rojo-calido lowercase">seencuentra.com</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gris-suave hover:text-rojo-calido transition-colors font-medium">
              Tienda
            </Link>
            <Link
              href="/quienes-somos"
              className="text-gris-suave hover:text-rojo-calido transition-colors font-medium"
            >
              Quiénes somos
            </Link>
            <Link
              href="/historias-emprendedoras"
              className="text-gris-suave hover:text-rojo-calido transition-colors font-medium"
            >
              Historias emprendedoras
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gris-suave hover:text-rojo-calido"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gris-suave hover:text-rojo-calido transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tienda
              </Link>
              <Link
                href="/quienes-somos"
                className="text-gris-suave hover:text-rojo-calido transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Quiénes somos
              </Link>
              <Link
                href="/historias-emprendedoras"
                className="text-gris-suave hover:text-rojo-calido transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Historias emprendedoras
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
