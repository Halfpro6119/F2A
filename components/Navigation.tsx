'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Navigation Component
 * Sticky header with logo, navigation menu, and donate CTA
 * Features:
 * - Responsive design (desktop menu + mobile hamburger)
 * - Smooth scroll to sections
 * - Professional charity branding with warm colors
 * - Sticky positioning for easy access
 */
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Navigation links that scroll to sections
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Mission', href: '#mission' },
    { label: 'Impact', href: '#impact' },
    { label: 'Get Involved', href: '#get-involved' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-warm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-warm transition-shadow">
              F2A
            </div>
            <span className="font-semibold text-foreground hidden sm:inline">
              Footprints 2 Africa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Donate Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-lg shadow-warm hover:shadow-warm-lg transition-all"
            >
              <a href="#contact">Donate</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-foreground hover:bg-accent/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mx-4 mt-2 bg-primary hover:bg-secondary text-white font-semibold w-auto"
              >
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Donate
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
