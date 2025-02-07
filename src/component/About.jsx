import React, { useState, useEffect} from 'react';
import emma2 from "@/images/emma2.JPG"
import Image from 'next/image';


const About = () => {

    const [value, setValue] = useState(0);

    const increaseValueAutomatically = () =>{
        const increment = 0.2;
        const targetValue = 80;
        const delay = 20;

        const intervalId = setInterval(() => {
            if (value < targetValue) {
                setValue((prevValue) => Math.min(prevValue + increment, targetValue))
            } else {
                clearInterval(intervalId);
            }
        }, delay);
         };

        useEffect(() => {
          increaseValueAutomatically();
        }, []);
        

        /*objects*/
        const array = [
            {
                id: 1,
                min: 0,
                max: 100,
                title: "Frontend web Development"
            },
            {
                id: 2,
                min: 0,
                max: 120,
                title: "Responsive Design"
            },
            {
                id: 3,
                min: 0,
                max: 150,
                title: "Backend development"
            },
        ];

    
        return (
            <div className='w-full overflow-x-hidden' id='about'> 
                <div className='flex flex-col w-full lg:flex-row overflow-x-hidden items-center justify-between  p-10'>
                    <div className=" flex items-center justify-center">
                        <Image src={emma2} alt="" className='w-[90%] lg:w-[500px] md:w-[500px]  rounded-full' data-aos="fade-right" data-aos-duration="3000"/>
                    </div>
                    <div className='flex flex-col gap-20' data-aos="fade-left" data-aos-duration="3000" >
                        <div className=' text-center lg:text-start'>
                            <p className='font-bold text-[#0077FF]'>ABOUT ME</p>
                            <p className="text-[35px] font-extrabold leading-snug">3+ Years Experience <br/>
                            <span className='text-[#0077FF]'>on Web Development</span></p>
                            <p className="pt-5">Hello there! I'm <span className="font-bold">Kawekwune Emmanuel</span>. I specialize in web design and development,<br/> 
                                and I'm deeply passionate and committed to my craft</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <div className='flex justify-center pb-4'>
                                <button className="bg-[#0077FF] h-8 w-[100%] lg:w-28 rounded-3xl text-[18px] font-semibold text-white">Main Skills</button>
                            </div>
                            
                                {array.map((array) =>(
                                <div key={array.id} 
                                className='flex flex-col gap-3 pb-3 font-bold'>  
                                <label>{array.title}</label>
                                <input type="range"
                                min={array.min}
                                max={array.max}
                                value={value}
                                onChange={(e) =>setValue(e.target.value)}
                                className='w-[100%] h-8 rounded-full border-none shadow-lg '  />
                                </div>
                                ))}
                            
                            

                        </div>
                    </div>
                </div>
            </div>
        );
    
}
 
export default About;