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
                <div className="flex flex-col-reverse lg:flex-row justify-between w-screen items-center lg:gap-6 pb-4 pl-2 pr-2  lg:pl-10 lg:pr-20 pt-10 lg:pt-32 overflow-x-hidden">
                    <div className='flex flex-col gap-6 w-[100%] lg:w-full items-center' data-aos="fade-right" data-aos-duration="3000">
                        <div className='lg:text-start text-center'>
                            <p className='font-semibold text-[25px]'>Welcome to my Portfolio</p>
                            <p className='text-[45px] font-extrabold leading-snug'>Hi I'm <br/>
                               <span className="text-[#0077FF] ">Kawekwune Emmanuel</span> <br/>
                            MERN Stack Developer</p>
                            <p className='text-[23px]'>Collaborating with highly skilled individual, <br/> I deliver top quality services</p>
                        </div>
                        <div className='flex flex-col lg:pl-12 lg:flex-row gap-6 lg:gap-24 w-screen lg:w-full items-center'>
                            <a href={`mailto:${emailAddress}`} onClick={handleClick}><button className='lg:ml-6 bg-[#0077FF] h-12 lg:w-28 w-[300px]  rounded-3xl text-[18px] font-semibold text-white'>Hire Me</button></a>
                           <a 
                           href="https://docs.google.com/document/d/1-vvQD1m34DGBtZJR3YSUrTgvE5Mx8-iNCSt3HX4c7kI/edit?usp=sharing"
                           _blank="true" 
                           download
                           > <button  className='text-[#0077FF] h-12 lg:w-44 w-[300px] outline outline-[#0077FF] rounded-3xl text-[18px] font-semibold bg-white'>Download CV</button> </a>
                        </div>
                    </div>
                    <div className="w-[100%] flex items-center justify-center">
                        <Image src={emma2} alt="my pics" className='w-[90%] lg:w-[500px] md:w-[500px]  rounded-full' data-aos="fade-left" data-aos-duration="3000"/>
                    </div>
                </div>
            </div>
        );
    
}
 
export default Hero;