import React from 'react'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import CandleChart from '../components/CandleChart'
import FeaturesSection from '../components/FeaturesSection'
import TestimonialSection from '../components/TestimonialSection'
import DemoForm from '../components/DemoForm'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <HeroSection />
      <StatsSection />
      <CandleChart />
      <FeaturesSection />
      <TestimonialSection />
      <DemoForm />
      <ContactSection />
      <Footer />
    </main>
  )
}
