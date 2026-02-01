'use client'

import { Mail, MapPin, Phone, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Contact Section
 * Displays contact information and call-to-action for donations
 * Features:
 * - Contact details (email, location, phone)
 * - Donation CTA
 * - Warm, professional design
 * - Easy to reach out
 */
export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? Want to donate? Ready to volunteer? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="bg-primary/5 rounded-xl p-8 text-center hover:shadow-warm transition-all group">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white rounded-lg shadow-warm group-hover:shadow-warm-lg transition-shadow">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
            <a
              href="mailto:sam@footprints2africa.org.uk"
              className="text-primary hover:text-secondary font-semibold transition-colors"
            >
              sam@footprints2africa.org.uk
            </a>
          </div>

          {/* Location */}
          <div className="bg-secondary/5 rounded-xl p-8 text-center hover:shadow-warm transition-all group">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white rounded-lg shadow-warm group-hover:shadow-warm-lg transition-shadow">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground font-semibold">
              United Kingdom
            </p>
          </div>

          {/* Phone */}
          <div className="bg-accent/5 rounded-xl p-8 text-center hover:shadow-warm transition-all group">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white rounded-lg shadow-warm group-hover:shadow-warm-lg transition-shadow">
                <Phone className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground font-semibold">
              Available on request
            </p>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-primary rounded-xl p-12 text-center text-white">
          <Heart className="w-12 h-12 mx-auto mb-4 animate-pulse" />
          <h3 className="text-3xl font-bold mb-4">
            Support Our Mission
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Your donation directly supports the distribution of medical supplies to people living with ostomies across Africa. Every contribution, no matter the size, makes a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white hover:bg-accent text-primary font-semibold px-8 py-3 rounded-lg shadow-warm hover:shadow-warm-lg transition-all"
            >
              <a href="https://www.justgiving.com" target="_blank" rel="noopener noreferrer">
                Donate via JustGiving
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all"
            >
              <a href="mailto:sam@footprints2africa.org.uk">
                Email Us
              </a>
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-background rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Why Donate to Footprints 2 Africa?
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span>
                <strong className="text-foreground">100% Volunteer-Led:</strong> No paid staff means more of your donation goes directly to impact
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span>
                <strong className="text-foreground">UK Registered Charity:</strong> Charity No. 1214173 - fully transparent and accountable
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span>
                <strong className="text-foreground">Direct Impact:</strong> Supplies go directly to people who need them most
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">✓</span>
              <span>
                <strong className="text-foreground">Faith-Based Values:</strong> Driven by compassion and a commitment to restoring dignity
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
