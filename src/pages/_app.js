// app page layout

import '../globals.css'
import { Theme } from '@radix-ui/themes'
import { DM_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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