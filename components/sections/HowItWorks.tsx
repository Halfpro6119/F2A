'use client'

import { Package, Boxes, Truck, Users } from 'lucide-react'

/**
 * How It Works Section
 * Displays the 4-step process of how Footprints 2 Africa operates
 * Features:
 * - Step-by-step visual process
 * - Icons for each step
 * - Warm, professional color scheme
 * - Responsive layout
 */
export function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Package,
      title: 'Collect Donations',
      description:
        'We collect surplus medical supplies, ostomy products, and dignity items from hospitals, clinics, and donors across the UK.',
      color: 'text-primary',
      bgColor: 'bg-primary/5',
    },
    {
      number: '2',
      icon: Boxes,
      title: 'Sort & Pack',
      description:
        'Our volunteer team carefully sorts, inspects, and packs supplies into dignity bags, ensuring quality and care.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/5',
    },
    {
      number: '3',
      icon: Truck,
      title: 'Ship to Africa',
      description:
        'We arrange shipping to our partner hospitals and clinics across South Africa, Botswana, Namibia, and Zimbabwe.',
      color: 'text-accent',
      bgColor: 'bg-accent/5',
    },
    {
      number: '4',
      icon: Users,
      title: 'Local Distribution',
      description:
        'Local partners distribute supplies directly to people living with ostomies, restoring dignity and hope.',
      color: 'text-primary',
      bgColor: 'bg-primary/5',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, effective process that transforms surplus supplies into restored dignity.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div
                  className={`${step.bgColor} rounded-xl p-8 h-full hover:shadow-warm transition-all group`}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-warm group-hover:shadow-warm-lg transition-shadow">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <Icon className={`w-12 h-12 ${step.color} group-hover:scale-110 transition-transform`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow to next step (hidden on last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-1 bg-gradient-primary rounded-full" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to be part of this journey?
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-lg shadow-warm hover:shadow-warm-lg transition-all"
          >
            Get Involved Today
          </a>
        </div>
      </div>
    </section>
  )
}
