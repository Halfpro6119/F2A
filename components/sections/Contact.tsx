'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Have questions? We&apos;d love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input placeholder="Your name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:sam@footprints2africa.org.uk" className="text-gray-600 hover:text-amber-600">
                    sam@footprints2africa.org.uk
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Follow Us</h4>
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-600 hover:text-amber-600 font-semibold">
                      Facebook
                    </a>
                    <a href="#" className="text-gray-600 hover:text-amber-600 font-semibold">
                      Twitter
                    </a>
                    <a href="#" className="text-gray-600 hover:text-amber-600 font-semibold">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-red-600 rounded-xl p-6 text-white">
              <h4 className="font-bold mb-2">Emergency Support</h4>
              <p className="text-sm mb-3">Need urgent assistance? Contact us directly for immediate support.</p>
              <Button className="w-full bg-white text-amber-600 hover:bg-gray-100">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
