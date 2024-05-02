// app page layout
import React from 'react'
import Layout from '../layout'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import '@radix-ui/themes'
import '../globals.css'

const _app = () => {
  return (
      <div>
    <Theme accentColor='purple'>
        <Layout />
    </Theme>
      </div>
  )
}

export default _app