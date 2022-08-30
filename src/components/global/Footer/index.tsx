import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className='bg-[#2D2D2D] flex flex-col px-[30px] xl:px-32 desktop:px-48 py-5 laptop:pt-[42px]'>
      <section className='grid grid-cols-2 grid-rows-1 laptop:flex laptop:justify-between'>
        <section className='col-start-1 col-span-1'>
          <Logo source="/footer_logo.svg" />
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
    <section className='col-start-2 col-span-1 laptop:order-3'>
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
    <section className='col-span-2 flex flex-col laptop:flex-row gap-y-5 xl:gap-y-0 laptop:gap-x-24 my-3 laptop:my-0 laptop:mb-[21px]'>
      <div>
        <div>
          <h5 className='font-medium text-base leading-9 text-[#8F8F8F] uppercase'>Community</h5>
        </div>
        <div>
          <ul className='font-medium text-base leading-8 text-white'>
            <li>
              <Link href="/">
                <a >
                  Lexir for Brands
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a >
                  Business Buyers
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a >
                  Sales Affiliates
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h5 className='font-medium text-base leading-9 text-[#8F8F8F] uppercase'>Platform</h5>
        </div>
        <div>
          <ul className='font-medium text-base leading-8 text-white'>
            <li>
              <Link href="/">
                <a >
                  Resources
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a >
                  Pricing
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a >
                  Get started
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h5 className='font-medium text-base leading-9 text-[#8F8F8F] uppercase'>Company</h5>
        </div>
        <div>
          <ul className='font-medium text-base leading-8 text-white'>
            <li>
              <Link href="/">
                <a >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a >
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a >
                  Legal
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h5 className='font-medium text-base leading-9 text-[#8F8F8F] uppercase'>Lexir Shop</h5>
        </div>
        <div>
          <ul className='font-medium text-base leading-8 text-white'>
            <li>
              <Link href="/">
                <a >
                  Brands
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a >
                  Spirits
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a >
                  Wine
                </a>
              </Link>
            </li>
            <li>

              <Link href="/">
                <a >
                  Blog
                </a>
              </Link>
            </li>
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
          © 2022 Lexir Inc.
        </p>
      </div>
      <div>
        <Link href="/">
          <a>
            <span className='mr-6 font-medium text-white'>Privacy</span>
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className='font-medium text-white'>Terms of service</span>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Footer