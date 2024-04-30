import React from "react";
import Navbar from '@/components/Navbar'
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoSection />
      {children}
    </div>
  )
}

export default layout