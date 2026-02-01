'use client'

import { Button } from '@/components/ui/button'
import { Heart, ArrowRight } from 'lucide-react'

/**
 * Hero Section
 * Main landing section with compelling headline, subheadline, and CTAs
 * Features:
 * - Warm, compassionate design with professional colors
 * - Impact statistics displayed prominently
 * - Clear call-to-action buttons
 * - Responsive layout for all screen sizes
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-soft pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Restoring Dignity,{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Delivering Hope
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Connecting surplus medical supplies in the UK with people who urgently need them across Africa. One precious bag at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            asChild
            className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-warm hover:shadow-warm-lg transition-all group"
          >
            <a href="#contact" className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Donate Now
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-6 text-lg rounded-lg transition-all group"
          >
            <a href="#mission" className="flex items-center gap-2">
              How We Help
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Stat 1: Donated Supplies */}
          <div className="bg-white rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-all group">
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              31,752
            </div>
            <p className="text-foreground font-semibold mb-1">Donated Supplies</p>
            <p className="text-sm text-muted-foreground">Since Feb 2025</p>
          </div>

          {/* Stat 2: Medical Supplies Saved */}
          <div className="bg-white rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-all group">
            <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">
              921.50kg
            </div>
            <p className="text-foreground font-semibold mb-1">Medical Supplies</p>
            <p className="text-sm text-muted-foreground">Saved from Landfill</p>
          </div>

          {/* Stat 3: Countries Supported */}
          <div className="bg-white rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-all group">
            <div className="text-4xl sm:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
              4
            </div>
            <p className="text-foreground font-semibold mb-1">Countries Supported</p>
            <p className="text-sm text-muted-foreground">Across Southern Africa</p>
          </div>
        </div>
      </div>
    </section>
  )
}
