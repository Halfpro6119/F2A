'use client'

import { Shield, Users, Heart } from 'lucide-react'

export default function TrustStrip() {
  const trustItems = [
    {
      icon: Shield,
      text: 'UK Registered Charity No. 1214173',
    },
    {
      icon: Users,
      text: '100% Volunteer-Led',
    },
    {
      icon: Heart,
      text: 'Faith-Based with Deep Compassion',
    },
  ]

  return (
    <section className="bg-gradient-to-r from-amber-50 to-red-50 border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-center gap-4 justify-center md:justify-start">
                <div className="flex-shrink-0">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <p className="text-gray-700 font-medium text-center md:text-left">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
