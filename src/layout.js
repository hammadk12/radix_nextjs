import React from "react";
import Navbar from '@/components/Navbar'
import Hero from "./components/Hero";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      {children}
    </div>
  )
}

export default layout