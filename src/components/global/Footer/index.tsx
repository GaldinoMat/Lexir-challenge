import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#2D2D2D] flex flex-col px-[30px] py-5'>
      <section className='grid grid-cols-2 grid-rows-1'>
        <section className='col-start-1 col-span-1'>
          <div>
            <Image src="/footer_logo.svg" width={105} height={24} alt="footer logo" />
          </div>
        </section>
        <FooterSocialLinks />
        <FooterMenuLinks />
      </section>
      <hr className='w-full' />
      <FooterLowerSection />
    </footer>
  )
}

function FooterSocialLinks() {
  return (
    <section className='col-start-2 col-span-1'>
      <ul className='flex justify-end space-x-2'>
        <li>
          <Image src="/medium.svg" width={24} height={24} alt="medium logo" />
        </li>
        <li>
          <Image src="/icons8-facebook 2.svg" width={24} height={24} alt="facebook logo" />
        </li>
        <li>
          <Image src="/icons8-instagram 2.svg" width={24} height={24} alt="instagram logo" />
        </li>
        <li>
          <Image src="/linkedin.svg" width={24} height={24} alt="linkedin logo" />
        </li>
      </ul>
    </section>
  )
}

function FooterMenuLinks() {
  return (
    <section className='col-span-2 flex flex-col space-y-5 my-3'>
      <div>
        <div>
          <h5 className='font-medium text-base leading-9 text-[#8F8F8F] uppercase'>Community</h5>
        </div>
        <div>
          <ul className='font-medium text-base leading-8 text-white'>
            <li>Lexir for Brands</li>
            <li>Business Buyers</li>
            <li>Sales Affiliates</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h5 className='font-medium text-base leading-9 text-[#8F8F8F] uppercase'>Platform</h5>
        </div>
        <div>
          <ul className='font-medium text-base leading-8 text-white'>
            <li>Resources</li>
            <li>Pricing</li>
            <li>Get started</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h5 className='font-medium text-base leading-9 text-[#8F8F8F] uppercase'>Company</h5>
        </div>
        <div>
          <ul className='font-medium text-base leading-8 text-white'>
            <li>About</li>
            <li>Contact</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h5 className='font-medium text-base leading-9 text-[#8F8F8F] uppercase'>Lexir Shop</h5>
        </div>
        <div>
          <ul className='font-medium text-base leading-8 text-white'>
            <li>Brands</li>
            <li>Spirits</li>
            <li>Wine</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h5 className='font-medium text-base leading-9 text-[#8F8F8F] uppercase'>Community</h5>
        </div>
        <div>
          <ul className='font-medium text-base leading-8 text-white'>
            <li>Lexir for Brands</li>
            <li>Business Buyers</li>
            <li>Sales Affiliates</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function FooterLowerSection() {
  return (
    <section className='mt-3 w-full flex justify-between'>
      <div>
        <p className='text-white font-light'>
          2022 Lexir Inc.
        </p>
      </div>
      <div>
        <span className='mr-6 font-medium text-white'>Privacy</span>
        <span className='font-medium text-white'>Terms of service</span>
      </div>
    </section>
  )
}

export default Footer