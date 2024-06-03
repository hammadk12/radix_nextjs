import React from 'react'
import { Link, Card } from '@radix-ui/themes'

const terms = () => {
  return (
    <div className='px-8 md:mx-[100px] lg:mx-[300px] my-16 '>
        <Card size='5' className='outline-double'>
        <h1 className='text-3xl font-bold mt-6 mb-4 text-[#8668ffcc]'>Terms of Service</h1>
        <p className='mb-10'>Last updated: 5/14/24</p>

        <section>
            <h2 className='text-2xl mt-4 mb-8 primary-font'>1. Introduction</h2>
            <p className='mb-14 text-lg'>Welcome to HTrain! These terms of service outline the rules and regulations for the use of HTrain&apos;s Website and services.</p>
        </section>

        <section>
            <h2 className='text-2xl mb-8 primary-font text-[#8668ffcc]'>2. Privacy Policy</h2>
            <p className='mb-14 text-lg'>Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your data. Please review it to understand our practices.</p>
        </section>

        <section>
                <h2 className="text-2xl mb-8 primary-font">3. User Obligations</h2>
                <p className="mb-14 text-lg">
                    As a user of our website, you agree not to misuse the services or help anyone else do so. You are responsible for ensuring that your use of our services is in compliance with laws and regulations.
                </p>
            </section>

            <section>
                <h2 className="text-2xl mb-8 primary-font text-[#8668ffcc]">4. Product Information</h2>
                <p className="mb-14 text-lg">
                    We make every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor&apos;s display of any color will be accurate.
                </p>
            </section>

            <section>
                <h2 className="text-2xl mb-8 primary-font">5. Payment and Pricing</h2>
                <p className="mb-14 text-lg">
                    We reserve the right to refuse or cancel orders at any time. Prices for our products are subject to change without notice.
                </p>
            </section>

            <section>
                <h2 className="text-2xl mb-8 primary-font text-[#8668ffcc]">6. Return Policy</h2>
                <p className="mb-14 text-lg">
                    If you are not satisfied with your purchase, you can return the product within 30 days of purchase for a full refund or exchange. The product must be returned in the same condition you received it and with the original packaging. Please note that some items may be non-refundable and non-exchangeable. If you have any questions feel free to 
                    <Link href="/Contact">
                    <span> Contact</span>
                    </Link> us.
                </p>
            </section>
            </Card>
    </div>
  )
}

export default terms