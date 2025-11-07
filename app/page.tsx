import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import DemoForm from '@/components/sections/DemoForm'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Solution />
        <Pricing />
        <Testimonials />
        <FAQ />
        <DemoForm />
      </main>
      <Toaster />
    </>
  )
}
