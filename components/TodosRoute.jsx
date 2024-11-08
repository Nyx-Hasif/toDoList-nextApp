import { assets } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const TodosRoute = () => {
  return (
     <div className='flex flex-col gap-6 py-4 px-4'>
        <h1 className="text-3xl font-extrabold text-shadow  text-red-500 ">3. Setup Route</h1>
        <Image src={assets.route_1} alt="models" />
        <Image src={assets.route_2} alt="models"/>
        <h1 className="text-3xl font-extrabold text-shadow  text-red-500 ">Example Reference call model in Setup Route</h1>
        <Image src={assets.model_use} alt="models" />
        <h1 className="text-3xl font-extrabold text-shadow  text-red-500 ">3.1 NextResponse Explained</h1>
        <Image src={assets.next_param} alt="models" />
        <h1 className="text-3xl font-extrabold text-shadow  text-red-500 ">3.2 Server side and Client side interaction</h1>
        <Image src={assets.next_req_delete} alt="models" />
       
    </div>
  )
}

export default TodosRoute
