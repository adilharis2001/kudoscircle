import React from 'react'
import { Button } from '@/components/ui/button'
import { HeroSection } from '@/components/sections/hero'
import { ProblemSection } from '@/components/sections/problem'
import { HowItWorksSection } from '@/components/sections/how-it-works'
import { FeaturesSection } from '@/components/sections/features'
import { FaqSection } from '@/components/sections/faq'
import { Footer } from '@/components/sections/footer'
import { ValuePropSection } from '@/components/sections/value-prop'

export default function Home() {
  return (
    <main className="relative bg-background text-white overflow-x-hidden">
      <div className="flex flex-col w-full">
        <HeroSection />
        <div className="flex flex-col space-y-20 sm:space-y-32 lg:space-y-48">
          <ProblemSection />
          <ValuePropSection />
          <HowItWorksSection />
          <FeaturesSection />
          <FaqSection />
        </div>
        <Footer />
      </div>
    </main>
  )
} 