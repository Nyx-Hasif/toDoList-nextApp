import { assets } from '@/public/assets';
import Image from 'next/image';
import React from 'react'

const ConnectMongo = () => {
  return (
    <div className='flex flex-col gap-6 py-4 px-4'>
      <h1 className="text-3xl font-extrabold text-shadow  text-red-500 ">1. Setup Connect MongoDB</h1>
      <Image src={assets.mongoDB} alt={"mongo"} />
      <h1 className="text-3xl font-extrabold text-shadow  text-red-500 ">1.1 Check Connection MongoDB at API ROUTE</h1>
      <Image src={assets.checkConnection} alt={"mongo"} />
    </div>
  );
}

export default ConnectMongo
