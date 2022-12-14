import ProductCard from '@components/global/ProductCard'
import React, { useEffect, useState } from 'react'
import { IProductObject } from './types/interfaces'
import ClipLoader from "react-spinners/ClipLoader";

function ProductListing() {
  const [productsData, setProductsData] = useState<IProductObject[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      return await fetch('/api/products', {
        method: 'POST',
      }).then(resp => resp.json()).then(json => {
        setLoading(false)
        return JSON.parse(json)
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData().then(data => setProductsData(data))
  }, [])

  if (loading) return (
    <div className='w-full h-screen laptop:w-2/3 flex items-center justify-center'>
      <ClipLoader
        loading
        size={75}
      />
    </div>
  )

  return (
    <section className='mt-[21px] laptop:mt-0 mb-20 w-full laptop:w-2/3 h-full flex flex-col md:flex-row md:flex-wrap items-center gap-y-10 md:gap-x-14 laptop:gap-5 desktop:gap-9 justify-center desktop:justify-evenly laptop:ml-[21px]'>
      {productsData.map((product: IProductObject) => (
        <ProductCard key={product.index} department={product.department} price={product.price} productName={product.productName} />
      ))}
    </section>
  )
}

export default ProductListing