'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-red-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">Footprints 2 Africa</span>
            </div>
            <p className="text-sm text-gray-400">
              Restoring dignity, hope, and human worth across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-amber-600 transition-colors">Home</a></li>
              <li><a href="#mission" className="hover:text-amber-600 transition-colors">Our Mission</a></li>
              <li><a href="#impact" className="hover:text-amber-600 transition-colors">Impact</a></li>
              <li><a href="#involved" className="hover:text-amber-600 transition-colors">Get Involved</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Patient Guides</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Healthcare Training</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Impact Stats */}
          <div>
            <h4 className="font-bold text-white mb-4">Our Impact</h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-amber-600 font-bold">31,752</p>
                <p className="text-gray-400">Supplies Distributed</p>
              </div>
              <div>
                <p className="text-amber-600 font-bold">4</p>
                <p className="text-gray-400">Countries Served</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">
                © 2025 Footprints 2 Africa. UK Registered Charity No. 1214173
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-gray-400">
                Designed by <a href="https://nextgensites.net" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-500">Riley Rogers – Next Gen Sites</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-400 justify-center md:justify-start">
          <a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Cookie Policy</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Accessibility</a>
        </div>
      </div>
    </footer>
  )
}
