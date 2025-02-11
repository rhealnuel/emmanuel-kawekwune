import React from 'react';
import emma2 from '@/images/emma2.JPG'
import Image from 'next/image';



const Hero = () => {

    const emailAddress = 'kawekwuneemmanuel2001@gmail.com'

    const handleClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    }
    
        return (
            <div className='w-full overflow-x-hidden '>
                <div className="flex flex-col-reverse lg:flex-row justify-between w-full items-center lg:gap-6 pb-4 pl-2 pr-2 lg:px-10   pt-10  overflow-x-hidden">
                    <div className='flex flex-col gap-6 w-[50%]   items-center lg:items-start' data-aos="fade-right" data-aos-duration="3000">
                        <div className='lg:text-start text-center'>
                            <p className='font-semibold text-[25px]'>Welcome to my Portfolio</p>
                            <p className='text-[45px] font-extrabold leading-snug'>Hi I'm <br/>
                               <span className="text-[#0077FF] ">Kawekwune Emmanuel</span> <br/>
                            MERN Stack Developer</p>
                            <p className='text-[23px]'>Collaborating with highly skilled individual, <br/> I deliver top quality services</p>
                        </div>
                        <div className='flex flex-col  lg:flex-row gap-6 lg:gap-6  w-screen lg:w-fit items-center'>
                            <a href={`mailto:${emailAddress}`} onClick={handleClick}><button className=' bg-[#0077FF] h-12 lg:w-28 w-[300px]  rounded-3xl text-[18px] font-semibold text-white'>Hire Me</button></a>
                           <a 
                           href="https://docs.google.com/document/d/1-vvQD1m34DGBtZJR3YSUrTgvE5Mx8-iNCSt3HX4c7kI/edit?usp=sharing"
                           _blank="true" 
                           download
                           > <button  className='text-[#0077FF] h-12 lg:w-44 w-[300px] outline outline-[#0077FF] rounded-3xl text-[18px] font-semibold bg-white'>Download CV</button> </a>
                        </div>
                    </div>
                    <div className="lg:w-[500px] flex justify-center lg:justify-start  ">
                        <Image src={emma2} alt="my pics" className='w-[90%] lg:w-[500px] md:w-[500px]  rounded-full' data-aos="fade-left" data-aos-duration="3000"/>
                    </div>
                </div>
            </div>
        );
    
}
 
export default Hero;