// app page layout
import React from 'react'
import Layout from '../layout'
import '@radix-ui/themes'
import '../globals.css'

const _app = ({ Component, pageProps }) => {
  return (
      <div className='text-white'>
        <Layout />
      </div>
  )
}

export default _app