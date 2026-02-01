'use client'

import { ArrowRight, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50 pt-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Restoring Dignity,
            <span className="block bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
              Delivering Hope
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Connecting surplus medical supplies in the UK with people who urgently need them across Africa. One precious bag at a time.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Heart className="w-5 h-5 mr-2" />
            Donate Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-lg border-2 border-gray-300 hover:border-amber-600 hover:text-amber-600"
            onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
          >
            How We Help
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          {[
            { number: '31,752', label: 'Donated Supplies', subtext: 'Since Feb 2025' },
            { number: '921.50kg', label: 'Medical Supplies', subtext: 'Saved from Landfill' },
            { number: '4', label: 'Countries Supported', subtext: 'Across Southern Africa' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
