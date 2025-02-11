import React, {useEffect, useState} from 'react';
import Spinner from './Spinner';
import MediaCard from './Card';
import { Container, Box, Grid } from "@mui/material";



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
            <div id='project' className='w-[100%] overflow-x-hidden'>
                <div className="flex flex-col justify-center  p-10 items-center gap-10 w-full">
                    <div className="text-center" data-aos="fade-right" data-aos-duration="3000">
                        <p className='text-[#0077FF] font-bold' >MY PROJECTS</p>
                        <p className="text-[40px] font-extrabold leading-snug p-4">Presenting my Design <br/> Portfolio</p>
                    </div>
                   {
                    loading ? <Spinner/>  
                   
                   :
                   
                  //  <div className='flex w-[100%] items-center '>

                  //     <div className="grid grid-cols-1 h-fit  gap-2 lg:grid-cols-3 md:grid-cols-2 overflow-x-hidden  w-[100%]">
                      
                  //     {data.map((items) =>(
                        
                  //     <MediaCard key={items._id} img={items.image} name={items.name} tools={items.tools} gitLink={items.gitLink} siteLink={items.siteLink}/>
                        
                  //     //   <div className="h-fit w-[20rem]   p-4 rounded-2xl shadow-2xl mb-10" key={items._id}  data-aos="fade-up " data-aos-duration="3000">
                  //     //         <a href={items.siteLink}><img src={items.image} alt="" className=' w-[320px] h-[250px] rounded-2xl  duration-500 delay-75 animate-[ease-in-out] hover:w-[340px] hover:h-[260px] ' /></a>
                  //     //         <div className="flex justify-between">
                  //     //             <a href={items.siteLink}><p className="font-bold text-[#0077FF] pt-5">{items.name}</p></a>
                  //     //             <a href={items.gitLink}><p className="font-bold text-[#0077FF] pt-5">Code</p></a>
                  //     //         </div>
                  //     //         <p className="font-semibold text-[#0077ff] w-[90%]"><span className="font-bold text-black">Tools  Used: </span>{items.tools}</p>
                  //     // </div>
                      
                  //     ))}

                      
                  //     </div>
                  //  </div>
     
                  <Container>
                  <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                    <Grid container spacing={4} justifyContent="center">
                      {data.map((items, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <MediaCard
                            img={items.image}
                            name={items.name}
                            tools={items.tools}
                            gitLink={items.gitLink}
                            siteLink={items.siteLink}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Container>
                    } 
                </div>
            </div>
        );
    
}
 
export default Project;