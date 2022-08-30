import ProductCard from '@components/global/ProductCard'
import React from 'react'

function ProductListing() {
  return (
    <section className='mt-[21px] laptop:mt-0 mb-20 w-full laptop:w-2/3 h-full flex flex-col md:flex-row md:flex-wrap items-center gap-y-10 md:gap-x-14 laptop:gap-5 desktop:gap-9 justify-center desktop:justify-evenly laptop:ml-[21px]'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  )
}

export default ProductListing