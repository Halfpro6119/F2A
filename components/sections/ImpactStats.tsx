'use client'

import { Package, Leaf, Globe, Award } from 'lucide-react'

/**
 * Impact Stats Section
 * Displays key metrics and impact numbers
 * Features:
 * - Four key statistics with icons
 * - Warm, professional color scheme
 * - Responsive grid layout
 * - Hover effects for engagement
 */
export function ImpactStats() {
  const stats = [
    {
      icon: Package,
      number: '31,752',
      label: 'Donated Supplies',
      description: 'Medical supplies redistributed',
      color: 'text-primary',
      bgColor: 'bg-primary/5',
    },
    {
      icon: Leaf,
      number: '921.50kg',
      label: 'Saved from Landfill',
      description: 'Environmental impact',
      color: 'text-secondary',
      bgColor: 'bg-secondary/5',
    },
    {
      icon: Globe,
      number: '4',
      label: 'Countries Served',
      description: 'Across Southern Africa',
      color: 'text-accent',
      bgColor: 'bg-accent/5',
    },
    {
      icon: Award,
      number: '1214173',
      label: 'Charity Registration',
      description: 'UK Registered Charity',
      color: 'text-primary',
      bgColor: 'bg-primary/5',
    },
  ]

  return (
    <section id="impact" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers, real lives changed. Every statistic represents dignity restored and hope delivered.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`${stat.bgColor} rounded-xl p-8 text-center hover:shadow-warm transition-all group`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-warm group-hover:shadow-warm-lg transition-shadow">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>

                {/* Number */}
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-foreground font-semibold mb-1">{stat.label}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
