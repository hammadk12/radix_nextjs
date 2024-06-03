import React from 'react'
import { Link, Card } from '@radix-ui/themes'

const privacy = () => {
  return (
    <div className='md:mx-[100px] lg:mx-[300px] my-16 px-8'>
        <Card size='5' className='outline-double'>
        <h2 className='text-4xl my-10 text-[#8668ffcc] primary-font'>Privacy Policy</h2>

        <section>
        <h2 className='text-2xl mt-4 mb-8 primary-font'>Introduction</h2>
        <p className='mb-14 text-lg'>This Privacy Policy outlines how HTrain collects, uses, maintains, and discloses information collected from users of our website and application. This policy is effective as of 05/06/2024.</p>
        </section>

        <section>
        <h2 className='text-2xl mb-8 primary-font text-[#8668ffcc]'>Information Collection</h2>
        <p className='mb-14 text-lg'>We collect personal identification information from users in various ways, including, but not limited to, when users visit our site, register, and in connection with other activities, services, features, or resources we make available. Users may be asked for, as appropriate, name, email address, etc.</p>
        </section>

        <section>
        <h2 className='text-2xl mb-8 primary-font'>Use of Information</h2>
        <p className='mb-14 text-lg'>The information we collect is used for various purposes, such as to improve customer service, personalize user experience, and to process transactions.</p>
        </section>

        <section>
        <h2 className='text-2xl mb-8 primary-font text-[#8668ffcc]'>Information Sharing and Disclosures</h2>
        <p className='mb-14 text-lg'>HTrain does not sell, trade, or rent users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information.</p>
        </section>

        <section>
        <h2 className='text-2xl mb-8 primary-font'>User Rights and Choices</h2>
        <p className='mb-14 text-lg'>Users have the right to access, update, or delete the information we have on them. This can be done through their account settings or by contacting us directly.</p>
        </section>

        <section>
        <h2 className='text-2xl mb-8 primary-font text-[#8668ffcc]'>Data Security</h2>
        <p className='mb-14 text-lg'>Your information is protected through the use of middleware and authentication. As the sole handler of data at HTrain, I ensure its security and confidentiality.</p>
        </section>

        <section>
        <h2 className='text-2xl mb-8 primary-font'>Changes to This Privacy Policy</h2>
        <p className='mb-14 text-lg'>HTrain has the discretion to update this privacy policy at any time. We encourage users to frequently check this page for any changes.</p>
        </section>

        <section>
        <h2 className='text-2xl mb-8 primary-font text-[#8668ffcc]'>Contact Information</h2>
        <p className='mb-14 text-lg'>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us from the 
            <Link href="/contact" underline='hover'>
            <span> Contact</span>
            </Link> page.    
        </p>
        </section>
        </Card>
    </div>
  )
}

export default privacy