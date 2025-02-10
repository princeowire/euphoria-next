import React from 'react'
import sucess from '../../public/assets/order-confirmed.png'
import Image from 'next/image'

const OrderSucessful = () => {
  return (
    <div className='h-screen bg-[#00000061] w-screen'>
      <a href="/products"><Image className='m-auto' alt='successful' src={sucess} /></a>
    </div>
  )
}

export default OrderSucessful
