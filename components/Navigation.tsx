'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#mission', label: 'Our Mission' },
    { href: '#impact', label: 'Impact' },
    { href: '#involved', label: 'Get Involved' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-red-600 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">
              Footprints 2 Africa
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white"
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white mt-2"
                onClick={() => {
                  setIsOpen(false)
                  document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
