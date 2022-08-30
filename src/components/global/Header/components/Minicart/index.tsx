import Image from 'next/image'
import React from 'react'

function Minicart() {
  return (
    <div className='flex'>
      <div className='mr-2'>
        <Image src="/basket-add.svg" height={24} width={24} alt="basket add to cart" />
      </div>
      <div>
        Cart
      </div>
    </div>
  )
}

export default Minicart