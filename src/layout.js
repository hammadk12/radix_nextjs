import React from "react";
import Navbar from '@/components/Navbar'
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Testimonial from "./components/Testimonial";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoSection />
      <Testimonial />
      {children}
    </div>
  )
}

export default layout