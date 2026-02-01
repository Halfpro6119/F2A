'use client'

import { Shield, Users, Heart } from 'lucide-react'

/**
 * Trust Strip Section
 * Displays key trust indicators and charity credentials
 * Features:
 * - Charity registration number
 * - Volunteer-led messaging
 * - Faith-based values
 * - Professional, warm design
 */
export function TrustStrip() {
  return (
    <section className="bg-white border-y border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Charity Registration */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex-shrink-0">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">UK Registered Charity</p>
              <p className="text-lg font-semibold text-foreground">No. 1214173</p>
            </div>
          </div>

          {/* Volunteer-Led */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex-shrink-0">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">100% Volunteer-Led</p>
              <p className="text-lg font-semibold text-foreground">No Paid Staff</p>
            </div>
          </div>

          {/* Faith-Based */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex-shrink-0">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Faith-Based with</p>
              <p className="text-lg font-semibold text-foreground">Deep Compassion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
