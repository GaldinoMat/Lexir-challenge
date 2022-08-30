import Image from 'next/image'
import React from 'react'

function BrandInfo() {
  return (
    <section className='flex flex-col space-y-9 px-10 border pb-[46px] pt-5'>
      <ReadMoreSection />
      <LocationInfo />
      <CategoriesInfo />
    </section>
  )
}

function ReadMoreSection() {
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='mb-[66px] flex items-center justify-center'>
        <Image src="/baldoria-logo.svg" width={215} height={76} alt="brand logo" />
      </div>
      <div>
        <div className='mb-[18px]'>
          <h1 className='text-4xl font-bold'>Baldoria Vermouth</h1>
        </div>
        <div className='mb-[22px]'>
          <p className='text-[#2D2D2D]'>
            Badoria rosso is a red vermouth that balances fresh, herby bitter notes against. Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels’ and Wouters’ rebellious grandparents.
          </p>
        </div>
        <div className='mx-auto w-fit'>
          <button className='px-[51px] py-[10px] font-medium text-xl text-[#1C8C64]'>
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}

function LocationInfo() {
  return (
    <section className='flex'>
      <div className='mr-[14px]'>
        <Image src="/Icons (Lexir).svg" width={24} height={24} alt="location image" />
      </div>
      <div>
        <p className='font-medium'>Location</p>
        <p className='font-medium text-xl text-[#595959]'>
          London, United Kingdom
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
          <span className='px-6 bg-[#F9F9F9]'>
            <p className='leading-[35px] font-medium text-[#595959]'>Gin</p>
          </span>
          <span className='px-6 bg-[#F9F9F9]'>
            <p className='leading-[35px] font-medium text-[#595959]'>Vodka</p>
          </span>
        </div>
      </div>
    </section>
  )
}

export default BrandInfo