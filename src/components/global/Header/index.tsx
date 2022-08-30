import React from 'react'
import HeaderDesktop from './Desktop'
import HeaderMobile from './Mobile'

function Header() {
  return (
    <header className="h-[104px] w-full px-[34px] xl:px-32 desktop:px-48 py-10">
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  )
}

export default Header