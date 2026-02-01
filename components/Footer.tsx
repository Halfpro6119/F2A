'use client'

import { Heart, Mail, MapPin, Phone } from 'lucide-react'

/**
 * Footer Component
 * Professional footer with links, contact info, and charity details
 * Features:
 * - Warm, professional color scheme
 * - Multiple link sections
 * - Contact information
 * - Copyright and credits
 */
export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg">Footprints 2 Africa</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Restoring dignity, delivering hope. A faith-based, volunteer-led charity dedicated to transforming lives across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-white/70 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#mission" className="text-white/70 hover:text-accent transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#impact" className="text-white/70 hover:text-accent transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#get-involved" className="text-white/70 hover:text-accent transition-colors">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors">
                  Patient Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors">
                  Healthcare Training
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:sam@footprints2africa.org.uk" className="text-white/70 hover:text-accent transition-colors">
                  sam@footprints2africa.org.uk
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70">United Kingdom</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Available on request</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-accent mb-1">31,752</p>
              <p className="text-xs text-white/70">Supplies Distributed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent mb-1">921.50kg</p>
              <p className="text-xs text-white/70">Saved from Landfill</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent mb-1">4</p>
              <p className="text-xs text-white/70">Countries Served</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent mb-1">1214173</p>
              <p className="text-xs text-white/70">Charity Registration</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Copyright */}
            <div className="text-sm text-white/70">
              <p>© 2025 Footprints 2 Africa. UK Registered Charity No. 1214173</p>
            </div>

            {/* Credits */}
            <div className="text-sm text-white/70 md:text-right">
              <p>
                Designed by{' '}
                <a
                  href="https://nextgensites.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white transition-colors"
                >
                  Riley Rogers – Next Gen Sites
                </a>
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 text-sm text-white/70 justify-center md:justify-start">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
