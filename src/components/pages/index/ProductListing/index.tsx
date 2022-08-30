import ProductCard from '@components/global/ProductCard'
import React, { useEffect, useState } from 'react'
import { IProductObject } from './types/interfaces'

function ProductListing() {
  const [productsData, setProductsData] = useState<IProductObject[]>([])

  const fetchData = async () => {
    return await fetch('/api/products', {
      method: 'POST',
    }).then(resp => resp.json()).then(json => JSON.parse(json))
  }

  useEffect(() => {
    fetchData().then((data) => setProductsData(data))
  }, [])

  return (
    <section className='mt-[21px] laptop:mt-0 mb-20 w-full laptop:w-2/3 h-full flex flex-col md:flex-row md:flex-wrap items-center gap-y-10 md:gap-x-14 laptop:gap-5 desktop:gap-9 justify-center desktop:justify-evenly laptop:ml-[21px]'>
      {productsData.map((product: IProductObject) => (
        <ProductCard key={product.index} department={product.department} price={product.price} productName={product.productName} />
      ))}
    </section>
  )
}

export default ProductListing