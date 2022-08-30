import Link from 'next/link'
import React from 'react'

function Menulinks() {
  return (
    <ul className='flex flex-col laptop:flex-row gap-y-1 laptop:gap-y-0 laptop:gap-x-9'>
      <Link href="/">
        <a>
          <li>Products</li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li>Brands</li>
        </a>
      </Link>
    </ul>
  )
}

export default Menulinks