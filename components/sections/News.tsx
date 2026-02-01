'use client'

export default function News() {
  const news = [
    {
      date: 'Jan 2025',
      title: 'Advent of Hope Campaign Launches',
      description: 'Our annual Advent campaign raises awareness and funds for our mission across the UK.',
      icon: '🎄',
    },
    {
      date: 'Dec 2024',
      title: 'Partnership with Helen Joseph Hospital',
      description: 'Exciting new partnership to expand our reach in South Africa and support more ostomates.',
      icon: '🤝',
    },
    {
      date: 'Nov 2024',
      title: '31,752 Supplies Distributed',
      description: 'We celebrate reaching a major milestone in our mission to restore dignity across Africa.',
      icon: '📦',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-xl text-gray-600">Updates from Footprints 2 Africa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="text-sm text-amber-600 font-semibold mb-2">{item.date}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
