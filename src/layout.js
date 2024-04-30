import React from "react";
import Navbar from '@/components/Navbar'

const layout = ({ children }) => {
  return (
    <div className="text-blue-500">
      <Navbar />
      {children}
    </div>
  )
}

export default layout