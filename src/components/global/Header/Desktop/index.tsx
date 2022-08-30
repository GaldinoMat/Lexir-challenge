import React from 'react'
import Logo from '../../Logo'
import Menulinks from '../components/Menulinks'
import Minicart from '../components/Minicart'
import UserProfile from '../components/UserProfile'

function HeaderDesktop() {
  return (
    <section className='w-full hidden laptop:flex justify-between'>
      <Logo source="/logo.svg" />
      <section className='flex gap-x-9'>
        <Menulinks />
        <UserProfile />
        <Minicart />
      </section>
    </section>
  )
}

export default HeaderDesktop