import Image from 'next/image'
import React from 'react'

const PhoneIcon = ({height, width, objectFit}) => {
  return (
    <Image src="/images/Phone11-pro-back.svg" width={50} height={50} objectFit="cover" alt=""/>
  )
}

export default PhoneIcon