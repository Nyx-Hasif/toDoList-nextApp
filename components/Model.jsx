import { assets } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const Model = () => {
  return (
    <div className='flex flex-col gap-6 py-4 px-4'>
        <h1 className="text-3xl font-extrabold text-shadow  text-red-500 ">2. Setup Model</h1>
        <p className='text-3xl font-extrabold text-shadow  text-blue-500 '>install mongoose package = npm install mongoose</p>
        <Image src={assets.model_code} alt="models" />
        <Image src={assets.models} alt="models"/>
    </div>
  )
}

export default Model
