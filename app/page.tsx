'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import About from '@/components/sections/About'
import ImpactStats from '@/components/sections/ImpactStats'
import HowItWorks from '@/components/sections/HowItWorks'
import ImpactStories from '@/components/sections/ImpactStories'
import GetInvolved from '@/components/sections/GetInvolved'
import ImpactMap from '@/components/sections/ImpactMap'
import News from '@/components/sections/News'
import Education from '@/components/sections/Education'
import Governance from '@/components/sections/Governance'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <TrustStrip />
      <ImpactStats />
      <About />
      <HowItWorks />
      <ImpactStories />
      <GetInvolved />
      <ImpactMap />
      <News />
      <Education />
      <Governance />
      <Contact />
      <Footer />
    </>
  )
}
