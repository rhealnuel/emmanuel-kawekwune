import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { useRef } from 'react';
import "@/app/globals.css"



function Navbar() {
    const menuRef = useRef(null)
    const closeRef = useRef(null)
    const linkRef = useRef(null)

    const open = () => {
        closeRef.current.style.display = 'block'
        menuRef.current.style.display = 'none'
        linkRef.current.style.display = 'block'
    };

    const close = () => {
        menuRef.current.style.display = 'block'
        closeRef.current.style.display = 'none'
        linkRef.current.style.display = 'none'

    }

    const phoneNumber = '+2349061143236'

    const whatsapp = () => {
        const whatsappurl = `https://wa.me/${phoneNumber}`;

        window.open(whatsappurl, '_blank')
    }
    
        return (
            <div className=' w-[100%] overflow-x-hidden'>
               <div className="flex justify-between pl-10 pr-10 pt-3 pb-3 items-center ">
                   <div> <p className="font-bold text-[20px]"><span className="text-[#0077FF] font-extrabold text-[38px]">N</span>uelVision</p></div>
                    <div>
                        <ul className="hidden lg:flex gap-10 text-[18px] font-semibold ">
                            <a href="#"><li>Home</li></a>
                            <a href="#about"><li>About Me</li></a>
                            <a href="#project"><li>Projects</li></a>
                            <a href="#contact"><li>Contact Me</li></a>
                        </ul>
                    

                         
                    </div>

                    <div>
                        <button className="bg-[#0077FF] hidden lg:block text-[18px] font-semibold text-white h-[50px] w-[150px] rounded-3xl" onClick={whatsapp}>Lets Chat</button>
                        <div ref={menuRef} className='block lg:hidden ' onClick={open}><BiMenuAltRight size={40}/></div>
                        <div ref={closeRef} className='hidden fixed' onClick={close}><AiOutlineCloseSquare size={40} /></div>

                    </div>
               </div>
                    <div ref={linkRef} className=' hidden fixed z-50 w-screen h-screen bg-white'>
                        <ul className="flex flex-col gap-20 text-[18px] font-semibold items-center text-center">
                            <a onClick={close} href="#"><li>Home</li></a>
                            <a onClick={close} href="#about"><li>About Me</li></a>
                            <a onClick={close} href="#project"><li>Projects</li></a>
                            <a onClick={close} href="#contact"><li>Contact Me</li></a>
                            <a href="#"><li className="bg-[#0077FF] flex justify-center items-center  text-[18px] font-semibold text-white h-[50px] w-[200px] rounded-3xl" onClick={whatsapp}>Lets Chat</li></a>
                        </ul>
                    

                         
                    </div>
            </div>
        );
    
}
 
export default Navbar;