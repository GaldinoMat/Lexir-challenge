import Image from 'next/image'
import React from 'react'
import { IProductAddToCart, IProductCard, IProductInfo } from './types/interfaces'

function ProductCard({ department, price, productName }: IProductCard) {
  return (
    <div className='flex flex-col w-[175px] shadow-xl'>
      <div>
        <Image src="/mr-gaston-brandy-bottle.svg" width={175} height={233} alt="product image2" />
      </div>
      <div className='p-[10px] min-h-[85px] flex flex-col justify-between'>
        <ProductInfo price={price} productName={productName} />
        <ProductAddToCart department={department} />
      </div>
    </div>
  )
}

function ProductInfo({ price, productName }: IProductInfo) {
  return (
    <div className='flex justify-between items-start'>
      <span>
        <p className='font-bold text-sm text-[#2D2D2D]'>{productName}</p>
      </span>
      <span>
        <p className='font-bold text-sm text-[#6B6B6B]'>{price}</p>
      </span>
    </div>
  )
}


function ProductAddToCart({ department }: IProductAddToCart) {
  return (
    <div className='flex justify-between items-center'>
      <span>
        <p className='font-bold text-sm text-[#6B6B6B]'>{department}</p>
      </span>
      <span>
        <button className='font-bold px-1 laptop:px-2 bg-[#F2F2F2]'>
          +
        </button>
      </span>
    </div>
  )
}

export default ProductCard