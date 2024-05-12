// app page layout
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import '@radix-ui/themes'
import '../globals.css'
import { DM_Sans } from 'next/font/google'

const dmsans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dmsans'
})


const _app = ({ Component, pageProps }) => {
  return (
      <div>
    <Theme accentColor="violet" className={`dark ${dmsans.variable} `}>
        <Navbar />
          <Component {...pageProps} />
        <Footer />
    </Theme>
    </div>
  )
}

export default _app