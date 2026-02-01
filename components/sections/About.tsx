'use client'

export default function About() {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restoring dignity, hope, and human worth to people living with ostomies across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Our Purpose',
              description: 'We believe every person deserves dignity, confidence, and access to essential medical supplies. Our mission is to transform lives through compassionate redistribution of stoma supplies.',
              icon: '❤️',
            },
            {
              title: 'Our Vision',
              description: 'A world where people living with ostomies in Africa have equal access to supplies, support, and community. We build grassroots partnerships for sustainable change.',
              icon: '🌟',
            },
            {
              title: 'Why It Matters',
              description: 'Ostomy care is a critical healthcare need. Many people across Africa lack access to supplies, leading to health complications and social isolation. We bridge this gap.',
              icon: '🤝',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Journey</h3>
          <div className="space-y-6">
            {[
              { year: '2024', event: 'Footprints 2 Africa founded with vision to serve Africa' },
              { year: '2025', event: 'Registered as UK Charity No. 1214173' },
              { year: '2025', event: 'Distributed 31,752 supplies across 4 countries' },
              { year: '2025', event: 'Saved 921.50kg of medical supplies from landfill' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-amber-600 to-red-600 text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-900 font-semibold">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
