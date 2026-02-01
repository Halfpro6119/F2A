'use client'

export default function ImpactStories() {
  const stories = [
    {
      name: 'Dickson',
      location: 'South Africa',
      story: 'After receiving stoma supplies from Footprints 2 Africa, Dickson was able to return to work and regain his independence. He now volunteers to help others in his community.',
      image: '👨‍💼',
    },
    {
      name: 'Asanda',
      location: 'Botswana',
      story: 'Asanda struggled with her ostomy until she received proper supplies and education. Now she confidently participates in community activities and mentors other ostomates.',
      image: '👩‍🎓',
    },
    {
      name: 'Grace',
      location: 'Zimbabwe',
      story: 'Grace&apos;s life changed when she got access to quality stoma supplies. She returned to school and is now studying nursing to help others facing similar challenges.',
      image: '👩‍⚕️',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact Stories</h2>
          <p className="text-xl text-gray-600">Real lives transformed by access to supplies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-gradient-to-br from-amber-50 to-red-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">{story.image}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.name}</h3>
              <p className="text-sm text-amber-600 font-semibold mb-4">{story.location}</p>
              <p className="text-gray-700 leading-relaxed">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
