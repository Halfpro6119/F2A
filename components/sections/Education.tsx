'use client'

export default function Education() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-red-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Understanding Ostomy Care</h2>
          <p className="text-xl text-gray-600">Education and support resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What is an Ostomy?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              An ostomy is a surgically created opening (called a stoma) in the abdomen that allows waste to bypass the normal route. Common types include:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Colostomy:</strong> Opening from the colon</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Ileostomy:</strong> Opening from the small intestine</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Urostomy:</strong> Opening for urinary diversion</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Supplies Matter</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Access to quality stoma supplies is essential for:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Maintaining skin health and preventing infections</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Enabling social participation and confidence</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Improving quality of life and dignity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Preventing serious health complications</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Resources</h3>
          <p className="text-gray-700 mb-6">
            We provide educational materials and support to help ostomates and healthcare providers understand ostomy care best practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Patient Guides', description: 'Comprehensive guides for living with an ostomy' },
              { title: 'Healthcare Training', description: 'Resources for medical professionals' },
              { title: 'Community Support', description: 'Connect with others in the ostomate community' },
            ].map((resource, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-amber-50 to-red-50 rounded-lg">
                <p className="font-bold text-gray-900 mb-2">{resource.title}</p>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
