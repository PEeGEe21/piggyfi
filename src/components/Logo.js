import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
      <div className="px-4">
          <Link href="/">
            <a><Image src="/images/Logo.svg" width={100} height={90} alt="Your Name"/></a>
            </Link>
    </div>
  )
}
