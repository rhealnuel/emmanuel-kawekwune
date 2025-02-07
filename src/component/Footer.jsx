import React from 'react';
import {FaGithub} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
    
        return (
            <div className='bg-[#0077ff] text-white flex flex-col lg:flex-row justify-between items-center pl-10 pr-10'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                    <div> <p className="font-bold text-[20px] text-white"><span className="text-white font-extrabold text-[38px]">N</span></p></div>
                    <p> &copy; copyright {new Date().getFullYear()} All right reserved</p>
                </div>
                <div className='flex items-center gap-4'>
                    <p>Follow Us:</p>
                    <a href="https://www.github.com/rhealnuel"> <FaGithub/> </a>
                    <a href="https://www.twitter.com/rhealnuel"><FaXTwitter/> </a>
                    <a href="https://www.linkedin.com/in/emmanuel-kawekwune-75201a232"><AiFillLinkedin/></a>
                </div>
            </div>
        );
    
}
 
export default Footer;