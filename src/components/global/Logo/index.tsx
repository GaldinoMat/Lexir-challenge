import Image from 'next/image'
import React from 'react'

interface ISource {
  source: string
}

function Logo({source}: ISource) {
  return (
    <div>
      <Image src={source} width={103} height={24} alt="Lexir logo" />
    </div>
  )
}

export default Logo