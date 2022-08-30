import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ISource {
  source: string
}

function Logo({ source }: ISource) {
  return (
    <div>
      <Link href="/" className='cursor-pointer'>
        <a>
          <Image src={source} width={103} height={24} alt="Lexir logo" />
        </a>
      </Link>
    </div>
  )
}

export default Logo