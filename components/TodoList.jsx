import { assets } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const TodoList = () => {
  return (
   <div className='flex flex-col gap-6 py-4 px-4'>

        <h1 className="text-3xl font-extrabold text-shadow  text-red-500 ">4. TodoList Components</h1>
        <p className="text-3xl font-extrabold text-shadow  text-blue-500 ">Endpoints</p>
        <Image src={assets.endpoints} alt="models" />

        <p className="text-3xl font-extrabold text-shadow  text-blue-500 ">4.1 Client fetch data</p>
        <Image src={assets.client_get} alt="models" />
        <Image src={assets.get_form} alt="models" />
        <Image src={assets.get_ui} alt="models" />
    
        <p className="text-3xl font-extrabold text-shadow  text-blue-500 ">4.2 Client post data</p>
        <Image src={assets.client_post} alt="models" />
        <Image src={assets.handle_add} alt="models" />
        <Image src={assets.post_form} alt="models" />
        <Image src={assets.post_ui} alt="models" />

        <p className="text-3xl font-extrabold text-shadow  text-blue-500 ">4.2 Client put/update data</p>
        <Image src={assets.client_put} alt="models" />
        <Image src={assets.handle_update} alt="models" />
        <Image src={assets.put_form} alt="models" />
        <Image src={assets.update_ui} alt="models" />

        <p className="text-3xl font-extrabold text-shadow  text-blue-500 ">4.2.1 PUT Explained</p>
        <Image src={assets.put_1} alt="models" />
        <Image src={assets.put_2} alt="models" />
        <Image src={assets.put_3} alt="models" />
        <Image src={assets.put_3_1} alt="models" />
        <Image src={assets.put_4} alt="models" />
        <Image src={assets.put_process} alt="models" />
        <Image src={assets.why_submit} alt="models" />
    
        <p className="text-3xl font-extrabold text-shadow  text-blue-500 ">4.3 delete data</p>
        <Image src={assets.client_delete} alt="models" />
        <Image src={assets.handle_delete} alt="models" />
        <Image src={assets.delete_form} alt="models" />
        <Image src={assets.delete_update_ui} alt="models" />

        <p className="text-3xl font-extrabold text-shadow  text-blue-500 ">4.4 Search data</p>
        <Image src={assets.handle_search} alt="models" />
        <Image src={assets.search_form} alt="models" />
        <Image src={assets.search_ui} alt="models" />

        <p className="text-3xl font-extrabold text-shadow  text-blue-500 ">4.5 Search filtered explained</p>
        <Image src={assets.search_regex} alt="models" />
        <Image src={assets.whitespace_1} alt="models" />
        <Image src={assets.whitespace_2} alt="models" />
        <Image src={assets.whitespace_3} alt="models" />
        <Image src={assets.whitespace_4} alt="models" />

    </div>
  )
}

export default TodoList
