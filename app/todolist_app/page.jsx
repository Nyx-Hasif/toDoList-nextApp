'use client'
import React, { useEffect, useState } from 'react'

const Page = () => {

  const [title,setTitle] = useState('')
  const [completed,setCompleted] = useState(false)
  const [data,setData] = useState([]) //data dari mongoDb adalah array
  // search state
  const [search, setSearch] = useState("");


  //Pertama, tambah state untuk tracking item yang sedang di edit:
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editCompleted, setEditCompleted] = useState(false);

  // method GET di client side
  const fetchData = async () =>{
    try {
      const response = await fetch('/api/todos');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log('error fetch Data:',error);
    }
  }
  

  // method POST di client side
  const postData = async (url,data) =>{
    try {
      const response = await fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data) //data yg sudah dlm bentuk objek
      })
      return response.json()
    } catch (error) {
      console.log("error fetch Data:", error);
    }
  }

  // method DELETE di client side
  const deleteData = async (url,_id) =>{
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({_id }), // letak objek di sini kerana nk hantar response ke route..nanti route akan ambil data sbg objek {_id : id} atau {_id}
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.log("error fetch Data:", error);
       throw error;
    }
  }

  //method PUT di client side
const updatedData = async (url,data) => {
  try {
    const response = await fetch(url,{
    method: 'PUT',
    headers:{
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(data)
  });

  if(!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json();
  } catch (error) {
    console.log('error:',error)
    throw Error 
  }
}


  useEffect(()=>{
    fetchData();  
  },[])


  //handle Add button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postData('/api/todos', {title:title.trim(),completed:completed});
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

  // handle delete button
  const handleDelete = async (_id) =>{
    try {
      const result = await deleteData("/api/todos",_id); //hantar _id terus ke async deleteData
      console.log('Success delete data:',result)
      alert('Success delete data:',result)
      setData(data.filter((item) => item._id !== _id)); // if item._id  not equal to 2..it will indicate to true and save in data...else it will disposed from data instant !
    } catch (error) {
      console.log("error fetch Data:", error);
      alert("Failed delete data:", error);
    }
  }

  // edit form tag input when click update button
  const handleEdit = (item) => {
    setEditingId(item._id);
    setEditTitle(item.title);
    setEditCompleted(item.completed);
  };

  // update data apabila save button ditekan !
  const handleUpdate = async (e, itemId) => {
    e.preventDefault();
    try {
      const result = await updatedData("/api/todos", {
        _id: itemId,
        title: editTitle.trim(),
        completed: editCompleted,
      });

      if (result) {
        alert("Updated successfully!");
        setEditingId(null); // Reset editing state
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.log("Error updating:", error);
      alert("Failed to update");
      throw error;
    }
  };


const handleSearch = (e) => {
  e.preventDefault();
 // Semak sama ada 'search' mempunyai value (tidak kosong)
  if (search) {
    // Gunakan method filter() untuk menyaring data
    const filterData = data.filter((item) => {
      // Buang whitespace dari search term dan tukar kepada lowercase
      // Contoh: "GTA 5" -> "gta5"
      const searchTerm = search.replace(/\s/g, "").toLowerCase(); // replace(/\s/g, "") - Buang semua whitespace

      // Buang whitespace dari title item dan tukar kepada lowercase
      // Contoh: "Grand Theft Auto 5" -> "grandtheftauto5"
      const itemTitle = item.title.replace(/\s/g, "").toLowerCase(); // replace(/\s/g, "") - Buang semua whitespace

      // Semak sama ada title item mengandungi search term
      // .includes() akan check sama ada searchTerm ada dalam itemTitle
      return itemTitle.includes(searchTerm);

      // Nota: Kod ni akan filter data berdasarkan search term
      // Contoh:
      // - Search "gta5" akan match "Grand Theft Auto 5"
      // - Search "auto" akan match "Grand Theft Auto 5"
    });

    // Semak filterData sebelum set state
    if (filterData.length === 0) { // means tiada data dlm console F12
      alert("Data not found in database");
      fetchData(); // Kembalikan data asal
      setSearch('');
    } else {
      // Hanya set data jika ada result
      setData(filterData);  
    }
  } else {
    fetchData();
  }
};

  return (
    <div className='flex flex-1 flex-col  items-center h-screen gap-6 overflow-auto py-6  '>

      <div className='flex flex-wrap justify-center gap-4  '>
          {/* add/create/post form */}
          <form onSubmit={handleSubmit}  className='flex flex-col justify-center items-start  gap-4 border-2 border-black py-4 px-4 h-fit md:min-w-[400px]'>
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

        {/* Display Latest data dari mongoDB (GET method) from http://localhost:3000/api/todos */}
        <div className='flex flex-col gap-4 border-2 border-black py-4 px-4 md:min-w-[400px]'>
            <h1 className='text-2xl font-extrabold'>Latest Data KeyIn</h1>
            <p>id : {data[data.length - 1]?._id}</p>
            <p>title : {data[data.length - 1]?.title}</p>
            {/* data[0]?.completed ? 'Yes' : 'No' digunakan untuk menampilkan nilai completed sebagai 'Yes' atau 'No'. */}
            <p>completed : {data[data.length - 1]?.completed ? 'Yes' : 'No'}</p>
            {/* Field createdAt dikirim dalam format ISODate */}
            <p>createdAt : {new Date(data[data.length - 1]?.createdAt).toLocaleString()}</p>
        </div>
      </div>


    {/* Search form in database mongoDB  */}
      <form onSubmit={handleSearch} className='flex flex-row h-fit gap-4 border border-black  '>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search Data in mongoDB' className='border border-black p-4 outline-none' />
        <button  className=' border border-black rounded-md py-2 px-2'>Search</button>
    </form>

    <div className='flex flex-wrap justify-evenly gap-8 border border-black '>
      {/* Display All data available in mongoDB */}
      {data && 
        data.map((item,index)=>(
          <div key={index} className='flex flex-col gap-2 border justify-center items-center border-black p-4 md:min-w-[300px] '>
            {/* // Form Edit PUT method */}
            {editingId === item._id ? (
              <form onSubmit={(e) => handleUpdate(e, item._id)} className='border border-red-500 md:w-[300px] py-6 px-6'>
                <div className='flex flex-col gap-2'>
                  <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className='border border-black pl-2'/>
                  <div className='flex gap-2'>
                    <label>Completed:</label>
                    <input type="checkbox" checked={editCompleted} onChange={(e) => setEditCompleted(e.target.checked)}/>
                  </div>
                  <div className='flex gap-2'>
                    <button type='submit' className='border border-black rounded-md py-1 px-1 text-white bg-green-500'> Save</button>
                    <button type='button' onClick={() => setEditingId(null)}className='border border-black rounded-md py-1 px-1 text-white bg-gray-500'>Cancel</button>
                  </div>
                </div>
              </form>
            ) : (
              // Normal Display Get Method from mongoDB (All data displayed)
              <div className='flex flex-col gap-2 border border-red-500 py-6 px-6'>
                <p>id : {item._id}</p>
                <p>title : {item.title.slice(0,25)}</p>
                <p>completed : {item.completed ? 'Yes' : 'No'}</p>
                <p>createdAt : {new Date(item.createdAt).toLocaleString()}</p>
                <button type='button' onClick={() => handleDelete(item._id)} className='border border-black rounded-md py-1 px-1 text-white bg-red-500'>DELETE</button>
                <button type='button'onClick={() => handleEdit(item)}className='border border-black rounded-md py-1 px-1 text-white bg-blue-500'>UPDATE</button>
              </div>
            )}
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Page

