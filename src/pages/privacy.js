import React from 'react'
import { Link, Card } from '@radix-ui/themes'

const privacy = () => {
  return (
    <div className='md:mx-[100px] lg:mx-[300px] my-16 px-8'>
        <Card size='5' className='outline-double'>
        <h2 className='text-4xl font-bold my-10'>Privacy Policy</h2>

        <section>
        <h2 className='text-xl font-bold mt-4'>Introduction</h2>
        <p>This Privacy Policy outlines how HTrain collects, uses, maintains, and discloses information collected from users of our website and application. This policy is effective as of 05/06/2024.</p>
        </section>

        <section>
        <h2 className='text-xl font-bold mt-4'>Information Collection</h2>
        <p>We collect personal identification information from users in various ways, including, but not limited to, when users visit our site, register, and in connection with other activities, services, features, or resources we make available. Users may be asked for, as appropriate, name, email address, etc.</p>
        </section>

        <section>
        <h2 className='text-xl font-bold mt-4'>Use of Information</h2>
        <p>The information we collect is used for various purposes, such as to improve customer service, personalize user experience, and to process transactions.</p>
        </section>

        <section>
        <h2 className='text-xl font-bold mt-4'>Information Sharing and Disclosures</h2>
        <p>HTrain does not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information.</p>
        </section>

        <section>
        <h2 className='text-xl font-bold mt-4'>User Rights and Choices</h2>
        <p>Users have the right to access, update, or delete the information we have on them. This can be done through their account settings or by contacting us directly.</p>
        </section>

        <section>
        <h2 className='text-xl font-bold mt-4'>Data Security</h2>
        <p>Your information is protected through the use of middleware and authentication. As the sole handler of data at HTrain, I ensure its security and confidentiality.</p>
        </section>

        <section>
        <h2 className='text-xl font-bold mt-4'>Changes to This Privacy Policy</h2>
        <p>HTrain has the discretion to update this privacy policy at any time. We encourage users to frequently check this page for any changes.</p>
        </section>

        <section>
        <h2 className='text-xl font-bold mt-4'>Contact Information</h2>
        <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us from the 
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