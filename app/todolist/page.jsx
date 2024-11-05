import { assets } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className="flex-1 border-2 border-black h-screen overflow-auto">
      <div className="py-4 px-4">
        <h1 className="text-3xl font-extrabold text-shadow">TodoList Steps</h1>
      </div>
      <div className="my-4 ">
        <Image src={assets.structure} alt="step_1" className="mt-4 mx-auto" />
        <Image src={assets.step_1} alt="step_1" className="my-4 mx-auto" />
        <Image src={assets.step_2} alt="step_1" className="my-4 mx-auto" />
        <Image src={assets.step_3} alt="step_1" className="my-4 mx-auto" />
        <Image src={assets.step_4} alt="step_1" className="my-4 mx-auto" />
        <Image src={assets.step_5} alt="step_1" className="mt-4 mx-auto" />
        <Image src={assets.step_5_1} alt="step_1" className="mx-auto" />
        <Image src={assets.step_5_2} alt="step_1" className="mx-auto" />
        <Image src={assets.step_6} alt="step_1" className="mt-4 mx-auto" />
        <Image src={assets.step_6_1} alt="step_1" className="mx-auto" />
        <Image src={assets.step_6_2} alt="step_1" className="mx-auto" />
        <Image src={assets.step_7} alt="step_1" className="mt-4 mx-auto" />
      </div>
    </div>
  );
}

export default Page
