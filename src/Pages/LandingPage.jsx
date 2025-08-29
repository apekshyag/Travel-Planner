import CTA from '@/components/landingComponents/CTA'
import FamousTrips from '@/components/landingComponents/FamousTrip'
import Features from '@/components/landingComponents/Features'
import Footer from '@/components/landingComponents/Footer'
import Hero from '@/components/landingComponents/Hero'
import Navbar from '@/components/landingComponents/Navbar'
import Testimmonials from '@/components/landingComponents/Testimonials'
import React from 'react'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <FamousTrips />
    <Testimmonials />
    <Footer />
    <CTA />
    </>
    
      
    
  )
}

export default LandingPage
