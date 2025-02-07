import React, {useEffect, useState} from 'react';
import Spinner from './Spinner';


const Project = () => {

   
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        // const apiUrl = 'https://nodepro-b6fwvrhoz-rhealnuels-projects.vercel.app/api/details'; // Replace this URL with your API endpoint
      setLoading(true)
        fetch('api/details')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON data received from the server
          })
          .then((fetchedData) => {
            setData(fetchedData); // Set the fetched data to the state
            setLoading(false);
          })
          .catch((error) => {
            // Handle errors that occur during the fetch operation
            console.error('There was a problem with the fetch operation:', error);
          });
      }, []);
    
        return (
            <div className='w-[100%] overflow-hidden'>
                <div className="flex flex-col  p-10 items-center gap-10">
                    <div className="text-center" data-aos="fade-right" data-aos-duration="3000">
                        <p className='text-[#0077FF] font-bold' >MY PROJECTS</p>
                        <p className="text-[40px] font-extrabold leading-snug p-4">Presenting my Design <br/> Portfolio</p>
                    </div>
                   {
                    loading ? <Spinner/>  
                   
                   :
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center  w-[100%] ">
                    
                     {data.map((items) =>(
                      
                     
                      
                        <div className="h-fit w-fit lg:w-[330px]  p-4 rounded-2xl shadow-2xl mb-10" key={items._id}  data-aos="fade-up " data-aos-duration="3000">
                            <a href={items.siteLink}><img src={items.image} alt="" className=' w-[320px] h-[250px] rounded-2xl  duration-500 delay-75 animate-[ease-in-out] hover:w-[340px] hover:h-[260px] ' /></a>
                            <div className="flex justify-between">
                                <a href={items.siteLink}><p className="font-bold text-[#0077FF] pt-5">{items.name}</p></a>
                                <a href={items.gitLink}><p className="font-bold text-[#0077FF] pt-5">Code</p></a>
                            </div>
                            <p className="font-semibold text-[#0077ff] w-[90%]"><span className="font-bold text-black">Tools  Used: </span>{items.tools}</p>
                    </div>
                    
                     ))}

                     
                    </div>
}
                    
                </div>
            </div>
        );
    
}
 
export default Project;