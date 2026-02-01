'use client'

export default function ImpactStats() {
  return (
    <section id="impact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600">Real numbers, real lives changed</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: '31,752', label: 'Donated Supplies', icon: '📦' },
            { number: '921.50kg', label: 'Saved from Landfill', icon: '♻️' },
            { number: '4', label: 'Countries Served', icon: '🌍' },
            { number: '1214173', label: 'Charity Registration', icon: '✓' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
