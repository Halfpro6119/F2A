'use client'

import { Package, Users, Truck, Heart } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Collect Donations',
      description: 'We receive donated stoma supplies from individuals, NHS trusts, and medical suppliers across the UK.',
      icon: Package,
    },
    {
      number: '2',
      title: 'Sort & Pack',
      description: 'Our volunteer team carefully sorts, inspects, and packs supplies into dignity packs at our hub.',
      icon: Users,
    },
    {
      number: '3',
      title: 'Ship to Africa',
      description: 'We coordinate shipping to partner hospitals and NGOs across Southern Africa.',
      icon: Truck,
    },
    {
      number: '4',
      title: 'Local Distribution',
      description: 'Local partners distribute supplies and provide dignity support to people living with ostomies.',
      icon: Heart,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Our process from donation to impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-red-600 text-white font-bold mb-4">
                    {step.number}
                  </div>
                  <Icon className="w-8 h-8 text-amber-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-amber-600 to-transparent"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
