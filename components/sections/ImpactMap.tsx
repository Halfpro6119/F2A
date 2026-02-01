'use client'

export default function ImpactMap() {
  const countries = [
    { name: 'South Africa', flag: '🇿🇦', partner: 'Helen Joseph Hospital' },
    { name: 'Botswana', flag: '🇧🇼', partner: 'Princess Marina Hospital' },
    { name: 'Namibia', flag: '🇳🇦', partner: 'Windhoek Central Hospital' },
    { name: 'Zimbabwe', flag: '🇿🇼', partner: 'Parirenyatwa Hospital' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Where We Work</h2>
          <p className="text-xl text-gray-600">Serving communities across Southern Africa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Map visualization */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="text-6xl text-center mb-8">🌍</div>
            <div className="space-y-4">
              {countries.map((country, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors">
                  <span className="text-4xl">{country.flag}</span>
                  <div className="flex-grow">
                    <p className="font-bold text-gray-900">{country.name}</p>
                    <p className="text-sm text-gray-600">{country.partner}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Network</h3>
              <p className="text-gray-700 leading-relaxed">
                We partner with hospitals, clinics, and NGOs across Southern Africa to ensure supplies reach people who need them most. Our local partners understand the unique needs of their communities and provide ongoing support to ostomates.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Partnership Model</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">1.</span>
                  <span>We identify partner hospitals and NGOs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">2.</span>
                  <span>Assess their supply needs and patient base</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">3.</span>
                  <span>Ship supplies and provide training</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">4.</span>
                  <span>Monitor impact and gather stories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
