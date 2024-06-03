import React from 'react'
import Link from 'next/link';

const Footer = () => {
    const current_year = new Date().getFullYear();
  
    return (
      <div className='w-full'>
        <div className='text-center py-10 text-lg font-medium'>
          <Link href="/privacy"  className='px-1 no-underline link'>
            Privacy
          </Link>
          <span>|</span>
          <Link href="/terms"  className='px-1 no-underline link'>
            Terms
          </Link>
          <span>|</span>
          <Link href='/Contact' className='px-1 no-underline link'>
            Contact
          </Link>
          <p>Copyright © {current_year}, HTrain. All Rights Reserved.</p>
        </div>
      </div>
    )
}

export default Footer