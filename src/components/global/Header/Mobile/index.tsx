import Image from 'next/image'
import React, { useState } from 'react'

interface IOpenNav {
  isNavOpen?: boolean
  setIsNavOpen?: (isNavOpen: boolean) => void
}

function HeaderMobile() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <section className="w-full flex md:hidden items-center justify-between text-[#2D2D2D] font-medium">
      <div>
        <Image src="/logo.svg" width={103} height={24} alt="Lexir logo" />
      </div>
      <BackgroundCover isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <OpenNavButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <MobileNavbar isNavOpen={isNavOpen} />
    </section>
  )
}

function BackgroundCover({ isNavOpen, setIsNavOpen = () => { } }: IOpenNav) {
  return (
    <div
      id="mobile-navbar-background-cover"
      onClick={() => setIsNavOpen(false)}
      className={`w-screen h-screen bg-black fixed z-[1] left-0 top-0 ${isNavOpen ? 'pointer-events-auto' : 'pointer-events-none'
        } ${isNavOpen ? 'opacity-50' : 'opacity-0'
        } transition-opacity duration-500`}
    />
  )
}

function OpenNavButton({ isNavOpen = false, setIsNavOpen = () => { } }: IOpenNav) {
  return (
    <button onClick={() => setIsNavOpen(!isNavOpen)}>
      <div className="space-y-2">
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
      </div>
    </button>
  )
}

function MobileNavbar({ isNavOpen = false }: IOpenNav) {
  return (
    <nav className={`fixed z-[2] ${isNavOpen ? 'left-0' : '-left-full'
      } top-0 w-2/3 pt-[50px] pr-5 pb-[30px] pl-[30px] bg-white h-screen transition-all duration-500 flex flex-col space-y-2`}>
      <div className='flex flex-col space-y-1'>
        <div className='flex'>
          <div className='mr-2'>
            <Image src="/carbon_user-avatar.svg" height={24} width={24} alt="user avatar" />
          </div>
          <div>
            Hello, Leandro
          </div>
        </div>
        <div className='flex'>
          <div className='mr-2'>
            <Image src="/basket-add.svg" height={24} width={24} alt="basket add to cart" />
          </div>
          <div>
            Cart
          </div>
        </div>
      </div>
      <hr className='border-black rounded' />
      <ul className='flex flex-col space-y-1'>
        <li>Products</li>
        <li>Brands</li>
      </ul>
    </nav>
  )
}

export default HeaderMobile