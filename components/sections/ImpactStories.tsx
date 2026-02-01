'use client'

import { Heart, MapPin } from 'lucide-react'

/**
 * Impact Stories Section
 * Displays real stories of people whose lives have been changed
 * Features:
 * - Three story cards with names and locations
 * - Warm, compassionate design
 * - Real transformation narratives
 * - Professional color scheme
 */
export function ImpactStories() {
  const stories = [
    {
      name: 'Dickson',
      location: 'South Africa',
      story:
        'After his ostomy surgery, Dickson felt isolated and ashamed. Thanks to Footprints 2 Africa, he received supplies and dignity packs that restored his confidence. Today, he volunteers to help others in his community.',
      color: 'border-primary',
      accentColor: 'text-primary',
    },
    {
      name: 'Asanda',
      location: 'Botswana',
      story:
        'Asanda couldn\'t afford ostomy supplies and had to miss work and school. Our supplies gave her back her independence and her future. She\'s now pursuing her dream of becoming a nurse.',
      color: 'border-secondary',
      accentColor: 'text-secondary',
    },
    {
      name: 'Grace',
      location: 'Zimbabwe',
      story:
        'Grace was struggling with her ostomy care until she received our dignity pack. The emotional support and practical supplies transformed her outlook. She now mentors other women in her village.',
      color: 'border-accent',
      accentColor: 'text-accent',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stories of Hope
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real people, real transformations. These are the stories that inspire our work.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`border-l-4 ${story.color} bg-gradient-soft rounded-xl p-8 hover:shadow-warm transition-all group`}
            >
              {/* Heart Icon */}
              <div className="mb-4">
                <Heart className={`w-8 h-8 ${story.accentColor} group-hover:scale-110 transition-transform`} />
              </div>

              {/* Story Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                &quot;{story.story}&quot;
              </p>

              {/* Name & Location */}
              <div className="border-t border-border pt-4">
                <p className={`font-bold text-lg ${story.accentColor} mb-1`}>
                  {story.name}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{story.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 bg-primary/5 rounded-xl p-8 text-center">
          <p className="text-lg text-foreground font-semibold mb-2">
            Every donation creates a story like these.
          </p>
          <p className="text-muted-foreground">
            Your generosity restores dignity, rebuilds confidence, and transforms lives across Africa.
          </p>
        </div>
      </div>
    </section>
  )
}
