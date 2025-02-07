"use client"
import React, { useEffect, useState } from 'react'
// import {useNavigate, useParams} from 'react-router-dom'
import {Toaster, toast, } from 'react-hot-toast'

import { MdOutlineDeleteForever } from "react-icons/md";




function Dashboard() {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [siteLink, setSiteLink] = useState('')
  const [gitLink, setGitLink] = useState('')
  const [tools, setTools] = useState('')
  const [image, setImage] = useState('')


  useEffect(() => {
    const apiUrl = 'api/details'; // Replace this URL with your API endpoint

    fetch('api/details')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data received from the server
      })
      .then((fetchedData) => {
        setData(fetchedData); // Set the fetched data to the state
      })
      .catch((error) => {
        // Handle errors that occur during the fetch operation
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name === '' || siteLink === '' || gitLink === '' || tools === '' || image === '')
    {
      toast.error("Please Fill the required details before submitting")
    }else{
    const formData = new FormData();
    formData.append('name', name);
    formData.append('siteLink', siteLink);
    formData.append('gitLink', gitLink);
    formData.append('tools', tools);
    formData.append('image', image);


    try {
      const response = await fetch('api/details', {
        method: 'POST',
        body: formData,
        
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('File uploaded:', data);
      toast.success(`Successfully added a project `)
      window.location.reload();
    } catch (error) {
      console.error('There was a problem with the upload:', error);
    }
  }
  };

  //Delete
  const handleDelete = () => {
    window.location.href = ``;
    navigate(`/dashboard/${data._id}`)
  }

  const logOut = () => {
    localStorage.clear()

    window.location.reload()
  }



  return ( 
    <div className='flex flex-col items-center bg-gray-300 h-full pt-10 overflow-x-hidden'>
      <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      </div>
      
      <div className='flex justify-end w-[100vw] px-10'>

      <div className='bg-blue-600 font-bold text-white px-8 py-1 justify-end'>
        <button onClick={logOut}>Log Out</button>
      </div>
      </div>
      
          <form encType="multipart/form-data"  className='flex flex-col w-fit h-fit px-10 py-10 shadow-xl gap-6 bg-white '>
          <div className='flex items-center justify-center font-bold text-[25px]'>
            <p>Add New Project</p>
          </div>
            <div className='flex  px-4 py-2 shadow-lg gap-2 rounded-md'>
                 <label htmlFor="name" className='font-bold'>Name</label>
                <input type="text" name="name" id="name"  placeholder='Site Name' onChange={(e) => setName(e.target.value)} className='outline-none w-full' required/>
            </div>
           <div className='flex  px-4 py-2 gap-2 shadow-lg  rounded-md'>
              <label htmlFor="siteLink" className='font-bold w-fit'> Site </label>
              <input type="url" name="siteLink" id="siteLink" placeholder='please enter sitelink' onChange={(e) => setSiteLink(e.target.value)} className='outline-none w-full' required />
           </div>
            <div className='flex  px-4 py-2 shadow-lg gap-2 rounded-md '>
            <label htmlFor="gitLink" className='font-bold'>Github </label>
            <input type="url" name="gitLink" id="gitLink" placeholder='please enter gitlink' onChange={(e) => setGitLink(e.target.value)} className='outline-none w-full' required/>
            </div>
            <div className='flex  px-4 py-2 shadow-lg gap-2 rounded-md '>
            <label htmlFor="tools" className='font-bold'>Tools</label>
            <input type="text" name="tools" id="tools" placeholder='please enter tools used' onChange={(e) => setTools(e.target.value)} className='outline-none w-full' required/>
            </div>
            <div className='flex  px-4 py-2 shadow-lg gap-2 rounded-md'>
            <label htmlFor="image" className='font-bold w-fit'>Image</label>
            <input type="file" name="image" id="image" accept='.jpeg,.png,.jpg' onChange={(e) => setImage(e.target.files[0])} className='outline-none w-full'required />
            </div>
           <div className='flex items-center justify-center hover:bg-blue-500 bg-blue-600 py-2 rounded-md'>

            <button type="submit" className='w-full h-full font-bold text-white' onClick={handleSubmit}>Add Project</button>
           </div>
          </form>





      <div>
      </div>
      <div className='pt-10 w-[80%] h-full bg-gray-300 overflow-x-scroll'>
    

      <table  className='min-w-full table-auto border-collapse border ' >
        <thead className="bg-gray-100">

        <tr>
          <th className="px-4 py-2">S/N</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Site</th>
          <th className="px-4 py-2">Github</th>
          <th className="px-4 py-2 ">Tools Used</th>
          <th className="px-4 py-2 ">image path</th>
          <th className="px-1">Delete</th>
         

          
        </tr>
        </thead>
        <tbody>
        {
      data.map( function(data, index){
        return (
        <tr key={index *3} >
          <td className="border px-4 py-2">{index+1}</td>
          <td className="border px-4 py-2">{data.name}</td>
          <td className="border px-4 py-2">{data.siteLink}</td>
          <td className="border px-4 py-2">{data.gitLink}</td>
          <td className="border px-4 py-2">{data.tools}</td>
          <td className="border px-4 py-2">{data.image}</td>
          <td className="border px-4 py-2 text-[25px] text-red-500 cursor-pointer"><MdOutlineDeleteForever onClick={() => window.location.href = `/kawekwune/${data._id}`} /></td>

        </tr>
        )
      })
    }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Dashboard