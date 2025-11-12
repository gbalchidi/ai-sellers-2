import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Toaster />
    </>
  )
}
