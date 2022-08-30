import React from 'react'
import HeaderMobile from './Mobile'

function Header() {
  return (
    <header className="h-[104px] w-full px-[34px] py-10">
      <div className="hidden md:block">Desktop header</div>
      <HeaderMobile />
    </header>
  )
}

export default Header