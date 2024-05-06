// app page layout
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import '@radix-ui/themes'
import '../globals.css'

const _app = ({ Component, pageProps }) => {
  return (
      <div>
    <Theme accentColor="violet" panelBackground='' className='dark'>
        <Navbar />
          <Component {...pageProps} />
        <Footer />
    </Theme>
      </div>
  )
}

export default _app