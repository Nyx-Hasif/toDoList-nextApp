import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
  
      <div className="flex flex-wrap w-full overflow-auto  md:w-fit md:flex-col gap-4 fixed bottom-0  md:bottom-0 md:right-0 border border-black px-6 py-4  text-white text-sm md:text-lg font-medium bg-slate-900">
        <Link href="#structure" className="hover:text-yellow-500 ">Structure</Link>
        <Link href="#connectDB" className="hover:text-yellow-500 ">DB Connect</Link>
        <Link href="#model" className="hover:text-yellow-500 ">Model</Link>
        <Link href="#route" className="hover:text-yellow-500 ">Server Route</Link>
        <Link href="#component" className="hover:text-yellow-500 ">Client Component</Link>
      </div>
  );
}

export default Navbar
