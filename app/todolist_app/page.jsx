'use client'
import React, { useEffect, useState } from 'react'

const Page = () => {

  const [title,setTitle] = useState('')
  const [completed,setCompleted] = useState(false)
  const [data,setData] = useState([]) //data dari mongoDb adalah array

  const fetchData = async () =>{
    try {
      const response = await fetch('/api/todos');
      const json = await response.json();
      setData(json);

    } catch (error) {
      console.log('error fetch Data:',error);
    }
  }

  const postData = async (url,data) =>{
    try {
      const response = await fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      })
      return response.json()
    } catch (error) {
      console.log("error fetch Data:", error);
    }
  }



  useEffect(()=>{
    fetchData();
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postData('/api/todos', {title,completed});
      console.log(result);
      if(result._id){
        alert("Data added successfully in mongoDB");
        fetchData(); // refetch data
      }
      setTitle('');
    } catch (error) {
      console.log('error fetch Data:',error);
      alert(error.message);
    }
  }


  return (
    <div className='flex flex-1 flex-col h-screen overflow-auto'>
      <form onSubmit={handleSubmit}  className='flex flex-col  gap-4 border-2 border-black py-4 px-4 h-fit w-fit'>
          <div className='flex gap-4 justify-center items-center'>
            <label htmlFor="title">Title</label>
            <input type="text" name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)}  className='border border-black pl-4' placeholder='Title' required />
          </div>
          <div className='flex gap-4 '>
            <label htmlFor="completed">Complete</label>
            <input type="checkbox" name='completed' id='completed' checked={completed} onChange={(e) => setCompleted(e.target.checked)}  className='border border-black pl-4' placeholder='Title' />
          </div>
          <button className='mx-auto border border-black rounded-md py-2 px-2'>ADD</button>
      </form>

      {/* Display data dari mongoDB (GET method) from http://localhost:3000/api/todos */}
      <div className='flex flex-col gap-4 border-2 border-black py-4 px-4 w-[300px]'>
          <p>id : {data[data.length - 1]?._id}</p>
          <p>title : {data[data.length - 1]?.title}</p>
          {/* data[0]?.completed ? 'Yes' : 'No' digunakan untuk menampilkan nilai completed sebagai 'Yes' atau 'No'. */}
          <p>completed : {data[data.length - 1]?.completed ? 'Yes' : 'No'}</p>
          {/* Field createdAt dikirim dalam format ISODate */}
          <p>createdAt : {new Date(data[data.length - 1]?.createdAt).toLocaleString()}</p>
         
      </div>

    </div>
  )
}

export default Page

