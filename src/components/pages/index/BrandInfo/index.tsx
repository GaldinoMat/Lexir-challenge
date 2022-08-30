import Image from 'next/image'
import React from 'react'
import { IQueryProps } from 'src/pages/types/interfaces'
import { ILocation, IReadMore } from './types/interfaces'

function BrandInfo({ brandName, brandText, imageURL, location }: IQueryProps) {
  return (
    <section className='flex flex-col space-y-9 px-10 border pb-[46px] pt-5 laptop:w-1/3'>
      <ReadMoreSection brandName={brandName} brandText={brandText} imageURL={imageURL} />
      <LocationInfo location={location} />
      <CategoriesInfo />
    </section>
  )
}

function ReadMoreSection({ brandName, brandText, imageURL }: IReadMore) {  
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='mb-[66px] flex items-center justify-center'>
        <Image src={imageURL} width={215} height={76} alt="brand logo" />
      </div>
      <div>
        <div className='mb-[18px]'>
          <h1 className='text-4xl font-bold'>{brandName}</h1>
        </div>
        <div className='mb-[22px]'>
          <p className='text-[#2D2D2D]'>
            {brandText}
          </p>
        </div>
        <div className='mx-auto w-fit'>
          <button className='px-[51px] py-[10px] font-medium text-xl text-[#1C8C64] hover:bg-[#595959] hover:text-[#F9F9F9] duration-300'>
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}

function LocationInfo({ location }: ILocation) {
  return (
    <section className='flex'>
      <div className='mr-[14px]'>
        <Image src="/Icons (Lexir).svg" width={24} height={24} alt="location image" />
      </div>
      <div>
        <p className='font-medium'>Location</p>
        <p className='font-medium text-xl text-[#595959]'>
          {location}
        </p>
      </div>
    </section>
  )
}

function CategoriesInfo() {
  return (
    <section className='flex'>
      <div className='mr-[14px]'>
        <Image src="/Icons (Lexir) Categories.svg" width={24} height={24} alt="categories image" />
      </div>
      <div>
        <p className='font-medium mb-3'>Product Categories</p>
        <div className='flex space-x-2'>
          <span className='px-6 bg-[#F9F9F9] text-[#595959] hover:bg-[#595959] hover:text-[#F9F9F9] duration-300 cursor-pointer'>
            <p className='leading-[35px] font-medium'>Gin</p>
          </span>
          <span className='px-6 bg-[#F9F9F9] text-[#595959] hover:bg-[#595959] hover:text-[#F9F9F9] duration-300 cursor-pointer'>
            <p className='leading-[35px] font-medium'>Vodka</p>
          </span>
        </div>
      </div>
    </section>
  )
}

export default BrandInfo