// home page
import React from 'react'
import Hero from '@/components/Hero'
import InfoSection from '@/components/InfoSection'
import Testimonial from '@/components/Testimonial'
import Faq from '@/components/Faq'


const index = () => {
  return (
    <div>
      <Hero />
      <InfoSection />
      <Testimonial />
      <Faq />
    </div>
  )
}

export default index