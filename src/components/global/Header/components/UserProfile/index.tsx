import Image from 'next/image'
import React from 'react'

function UserProfile() {
  return (
    <div className='flex'>
      <div className='mr-2'>
        <Image src="/carbon_user-avatar.svg" height={24} width={24} alt="user avatar" />
      </div>
      <div>
        Hello, Leandro
      </div>
    </div>
  )
}

export default UserProfile