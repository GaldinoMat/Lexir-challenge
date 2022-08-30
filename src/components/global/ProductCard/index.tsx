import Image from 'next/image'
import React from 'react'

function ProductCard() {
  return (
    <div className='flex flex-col w-[175px] shadow-xl'>
      <div>
        <Image src="/mr-gaston-brandy-bottle.svg" width={175} height={233} alt="product image2" />
      </div>
      <div className='p-[10px] space-y-2'>
        <ProductInfo />
        <ProductAddToCart />
      </div>
    </div>
  )
}

function ProductInfo() {
  return (
    <div className='flex justify-between items-center'>
      <span>
        <p className='font-bold text-sm text-[#2D2D2D]'>Mr Gaston</p>
      </span>
      <span>
        <p className='font-bold text-sm text-[#6B6B6B]'>€32</p>
      </span>
    </div>
  )
}

function ProductAddToCart() {
  return (
    <div className='flex justify-between items-center'>
      <span>
        <p className='font-bold text-sm text-[#6B6B6B]'>Brandy</p>
      </span>
      <span>
        <button className='font-bold px-1 bg-[#F2F2F2]'>
          +
        </button>
      </span>
    </div>
  )
}

export default ProductCard