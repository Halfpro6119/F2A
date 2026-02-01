'use client'

import { useState } from 'react'
import { Heart, Gift, Users, Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState('donate-supplies')

  const tabs = [
    { id: 'donate-supplies', label: 'Donate Supplies', icon: Gift },
    { id: 'donate-money', label: 'Donate Money', icon: Heart },
    { id: 'volunteer', label: 'Volunteer', icon: Users },
    { id: 'fundraise', label: 'Fundraise', icon: Megaphone },
  ]

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600">Choose how you want to make a difference</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-600 to-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 md:p-12">
          {activeTab === 'donate-supplies' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate Medical Supplies</h3>
              <p className="text-gray-700 mb-6">
                We accept donations of new, unopened stoma supplies from individuals, NHS trusts, and medical suppliers.
              </p>
              <div className="bg-white rounded-lg p-6 mb-6 border-l-4 border-l-amber-600">
                <p className="text-gray-900 font-semibold mb-2">Impact: Your donation of 100 stoma bags helps 50 people for a month</p>
              </div>
              <Button className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white">
                Learn About Donating Supplies
              </Button>
            </div>
          )}

          {activeTab === 'donate-money' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate Money</h3>
              <p className="text-gray-700 mb-6">
                Your financial donation helps us collect, sort, pack, and ship supplies to Africa.
              </p>
              <div className="bg-white rounded-lg p-6 mb-6 border-l-4 border-l-amber-600">
                <p className="text-gray-900 font-semibold mb-2">💷 Gift Aid: UK taxpayers can increase your donation by 25% at no extra cost</p>
                <p className="text-sm text-gray-600">We&apos;ll claim Gift Aid automatically when you donate</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[20, 50, 100, 250].map((amount) => (
                  <Button key={amount} variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50">
                    £{amount}
                  </Button>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white">
                Donate Now
              </Button>
            </div>
          )}

          {activeTab === 'volunteer' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer With Us</h3>
              <p className="text-gray-700 mb-6">
                Join our volunteer team to help sort, pack, and prepare supplies for shipment to Africa.
              </p>
              <div className="bg-white rounded-lg p-6 mb-6 border-l-4 border-l-amber-600">
                <p className="text-gray-900 font-semibold mb-2">Volunteer Opportunities:</p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Sorting and quality checking supplies</li>
                  <li>• Packing dignity packs</li>
                  <li>• Administrative support</li>
                  <li>• Social media and marketing</li>
                </ul>
              </div>
              <Button className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white">
                Join Our Volunteer Team
              </Button>
            </div>
          )}

          {activeTab === 'fundraise' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fundraise for Us</h3>
              <p className="text-gray-700 mb-6">
                Organize a fundraising event or campaign to support Footprints 2 Africa.
              </p>
              <div className="bg-white rounded-lg p-6 mb-6 border-l-4 border-l-amber-600">
                <p className="text-gray-900 font-semibold mb-2">Fundraising Ideas:</p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Charity runs or walks</li>
                  <li>• Bake sales or community events</li>
                  <li>• Corporate team challenges</li>
                  <li>• Birthday fundraisers</li>
                </ul>
              </div>
              <Button className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white">
                Start a Fundraiser
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
