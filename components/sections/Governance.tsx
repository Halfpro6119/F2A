'use client'

export default function Governance() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trust & Governance</h2>
          <p className="text-xl text-gray-600">Transparency and accountability</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Charity Registration</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Charity Number</p>
                <p className="text-2xl font-bold text-amber-600">1214173</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Registered in</p>
                <p className="font-semibold text-gray-900">United Kingdom</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Status</p>
                <p className="font-semibold text-gray-900">Active</p>
              </div>
              <a
                href="https://www.charitycommission.gov.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 font-semibold mt-4 inline-block"
              >
                View on Charity Commission →
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>100% volunteer-led organization</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Transparent financial reporting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Faith-based values with deep compassion</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Accountable to our donors and beneficiaries</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Regular impact reporting and updates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Board & Leadership</h3>
          <p className="text-gray-700 mb-6">
            Footprints 2 Africa is led by a dedicated team of volunteers who are passionate about restoring dignity and hope across Africa. Our leadership brings diverse expertise in healthcare, logistics, fundraising, and community engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: 'Founder & Director', name: 'Volunteer Leadership Team' },
              { role: 'Operations', name: 'Dedicated Volunteers' },
              { role: 'Community Engagement', name: 'Passionate Advocates' },
            ].map((member, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-amber-50 to-red-50 rounded-lg">
                <p className="text-sm text-amber-600 font-semibold mb-1">{member.role}</p>
                <p className="font-bold text-gray-900">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
