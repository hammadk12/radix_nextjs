// app page layout
import React from 'react'
import Layout from '../layout'
import Navbar from '@/components/Navbar'
import '@radix-ui/themes'
import '../globals.css'

const _app = ({ Component, pageProps }) => {
  return (
      <div className='text-white'>
        <Navbar />
        <Component {...pageProps} />
        <Layout />
      </div>
  )
}

export default _app