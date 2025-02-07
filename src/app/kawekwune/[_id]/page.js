"use client"
import React, {useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'


function Delete() {
    let { _id } = useParams()
    // const navigate = useNavigate()

    const handleDelete = () => {
        axios
        .delete(`api/details/${_id}`)
        .then(() => {
            window.location.href = "/kawekwune"
        }).catch((error) => {
            console.log(error)
        })
    }





  return (


    <div className='flex items-center justify-center h-screen '>
            <div className='w-fit h-fit shadow-xl flex flex-col gap-10 lg:gap-16 p-4'> 
                <p className='lg:text-[40px] text-[20px] font-bold'>Do you really want to delete?</p>
                <div className='flex  justify-center gap-10'>
                    <button onClick={() => window.location.href = "/kawekwune"} className='text-[14px] lg:text-[20px] text-white bg-green-600 px-6 hover:font-bold '>No</button>
                    <button onClick={handleDelete} className='text-[14px] lg:text-[20px] text-white bg-red-600 px-6 hover:font-bold '>Yes</button>
                </div>
            </div>
    </div>
  )
}

export default Delete