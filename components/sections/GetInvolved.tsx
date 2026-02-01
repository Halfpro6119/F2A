'use client'

import { Heart, Gift, Users, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Get Involved Section
 * Displays ways people can contribute to the charity
 * Features:
 * - Four main ways to get involved
 * - Warm, professional color scheme
 * - Clear call-to-action buttons
 * - Responsive grid layout
 */
export function GetInvolved() {
  const ways = [
    {
      icon: Heart,
      title: 'Donate Supplies',
      description:
        'Have surplus medical supplies or ostomy products? We collect donations from hospitals, clinics, and individuals across the UK.',
      cta: 'Learn More',
      color: 'text-primary',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary',
    },
    {
      icon: Gift,
      title: 'Make a Donation',
      description:
        'Your financial contribution helps us cover shipping, logistics, and support for our partner organizations across Africa.',
      cta: 'Donate Now',
      color: 'text-secondary',
      bgColor: 'bg-secondary/5',
      borderColor: 'border-secondary',
    },
    {
      icon: Users,
      title: 'Volunteer',
      description:
        'Join our team of passionate volunteers. Help sort supplies, pack dignity bags, or support our administrative work.',
      cta: 'Get Involved',
      color: 'text-accent',
      bgColor: 'bg-accent/5',
      borderColor: 'border-accent',
    },
    {
      icon: BookOpen,
      title: 'Spread Awareness',
      description:
        'Share our mission with your network. Help us reach more people and build a community of supporters across the UK.',
      cta: 'Share Our Story',
      color: 'text-primary',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary',
    },
  ]

  return (
    <section id="get-involved" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There are many ways to support our mission and make a real difference in people's lives.
          </p>
        </div>

        {/* Ways to Get Involved Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {ways.map((way, index) => {
            const Icon = way.icon
            return (
              <div
                key={index}
                className={`border-l-4 ${way.borderColor} ${way.bgColor} rounded-xl p-8 hover:shadow-warm transition-all group`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon className={`w-12 h-12 ${way.color} group-hover:scale-110 transition-transform`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {way.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {way.description}
                </p>

                {/* CTA Button */}
                <Button
                  asChild
                  className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-lg shadow-warm hover:shadow-warm-lg transition-all"
                >
                  <a href="#contact">{way.cta}</a>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-primary rounded-xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you donate supplies, contribute financially, volunteer your time, or spread awareness, every action counts. Together, we're restoring dignity and delivering hope.
          </p>
          <Button
            asChild
            className="bg-white hover:bg-accent text-primary font-semibold px-8 py-3 rounded-lg shadow-warm hover:shadow-warm-lg transition-all"
          >
            <a href="#contact">Get Started Today</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
