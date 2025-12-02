'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            <Link href="/">CI/CD App</Link>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition">
              Sobre
            </Link>
            <Link href="/contact" className="hover:text-primary transition">
              Contato
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="block hover:text-primary">
              Sobre
            </Link>
            <Link href="/contact" className="block hover:text-primary">
              Contato
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}