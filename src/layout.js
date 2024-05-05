import React from "react";
import Navbar from '@/components/Navbar'
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoSection />
      <Testimonial />
      <Faq />
      <Footer />
      {children}
    </div>
  )
}

export default layout