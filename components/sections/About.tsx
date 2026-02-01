'use client'

import { Heart, Target, Users } from 'lucide-react'

/**
 * About/Mission Section
 * Displays the charity's purpose, vision, and impact
 * Features:
 * - Three-panel layout (Purpose, Vision, Why It Matters)
 * - Timeline of milestones
 * - Warm, compassionate design
 * - Professional color scheme
 */
export function About() {
  const pillars = [
    {
      icon: Heart,
      title: 'Our Purpose',
      description:
        'We restore dignity and hope to people living with ostomies across Africa by collecting, sorting, and delivering essential medical supplies and dignity packs.',
      color: 'text-primary',
      bgColor: 'bg-primary/5',
    },
    {
      icon: Target,
      title: 'Our Vision',
      description:
        'A world where no one living with an ostomy lacks access to essential supplies or feels isolated. Where dignity is universal and hope is abundant.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/5',
    },
    {
      icon: Users,
      title: 'Why It Matters',
      description:
        'Ostomy supplies are expensive and often unavailable in Africa. Without them, people face health complications, social stigma, and lost dignity. We bridge this gap.',
      color: 'text-accent',
      bgColor: 'bg-accent/5',
    },
  ]

  const milestones = [
    {
      year: '2024',
      title: 'Charity Registration',
      description: 'Officially registered as UK Charity No. 1214173',
    },
    {
      year: '2024',
      title: 'First Shipment',
      description: 'Delivered 5,000+ medical supplies to South Africa',
    },
    {
      year: '2025',
      title: 'Expansion',
      description: 'Now serving 4 countries across Southern Africa',
    },
    {
      year: '2025',
      title: 'Growing Impact',
      description: '31,752+ supplies distributed, 921.50kg saved from landfill',
    },
  ]

  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A faith-based, volunteer-led charity dedicated to restoring dignity and delivering hope.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={index}
                className={`${pillar.bgColor} rounded-xl p-8 hover:shadow-warm transition-all group`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon className={`w-12 h-12 ${pillar.color} group-hover:scale-110 transition-transform`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Timeline */}
        <div className="bg-gradient-soft rounded-xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our Journey
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-warm" />

                {/* Content */}
                <div className="md:ml-8 bg-white rounded-lg p-6 shadow-warm hover:shadow-warm-lg transition-all">
                  <p className="text-sm font-semibold text-primary mb-2">
                    {milestone.year}
                  </p>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
