// app page layout
import React from 'react'
import Layout from '../layout'
import Navbar from '@/components/Navbar'
import '@radix-ui/themes'
import '../globals.css'
import { Theme } from '@radix-ui/themes'

const _app = ({ Component, pageProps }) => {
  return (
    <Theme accentColor='crimson' grayColor='sand' radius='large' scaling='95%'>
      <div>
        <Navbar />
        <Component {...pageProps} />
        <Layout />
      </div>
    </Theme>
  )
}

export default _app