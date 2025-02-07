import React from 'react';
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3, BiLogoReact, BiLogoTailwindCss, BiLogoGithub, BiLogoNetlify} from 'react-icons/bi'
import { DiJavascript } from 'react-icons/di'




const Icons = () =>{

    const myIcon = [
    {
        id: 1,
        name: AiFillHtml5
    },
    {
        id: 2,
        name: BiLogoCss3
    },
    {
        id: 3,
        name: DiJavascript
    },
    {
        id: 4,
        name: BiLogoReact
    },
     {
        id: 5,
        name: BiLogoTailwindCss
    },
     {
        id: 6,
        name: BiLogoGithub
    },
     {
        id: 7,
        name: BiLogoNetlify
    },

]
    return(
        <div className=' w-screen overflow-x-hidden'>
           <ul className="flex flex-col lg:flex-row h-full items-center lg:items-start bg-[#F8F8F8] justify-evenly pt-10 pb-10 mt-16 mb-12">
            {myIcon.map((myIcon)=>(
                <li key={myIcon.id}> <myIcon.name size={100} className='text-[#C6C6C6]  animate-pulse hover:animate-bounce'/> </li>
            ))}
           </ul>
        </div>
    )
};

export default Icons;