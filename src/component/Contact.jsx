import React from 'react';
const Contact = () => {
    
        return (
            <div>
                <div className='bg-[#0077ff] flex flex-col gap-20 items-center pb-20 pt-20 w-screen pl-2 pr-2'>
                    <div className='text-white text-center'data-aos="fade-down" data-aos-duration="3000">
                        <p className='font-bold'>CONTACT ME</p>
                        <p className='text-[40px] font-bold'>Request Free Consultancy</p>
                    </div>
                    <div className='flex flex-col lg:flex-row md:flex-row gap-7' data-aos="fade-right" data-aos-duration="3000" >
                        <div className='bg-white p-6 rounded-lg'>
                            <p className='font-semibold'>Hotline 24/67</p>
                            <p className='font-bold text-lg pb-6'>(+234) 906 114 3236  </p>
                            <p><span className='font-bold'>Address: </span>Calabar, Nigeria</p>
                            <p><span className='font-bold'>Email: </span>kawekwuneemmanuel2001@gmail.com</p>
                            <p><span className='font-bold'>Work Hour: </span>Mon - Sat 9:00 - 18:00</p>
                        </div>
                        <div >
                            <form action="https://formspree.io/f/mknlkzkv" method='post'  className='flex flex-col gap-4 ' data-aos="fade-left" data-aos-duration="3000">
                                <div className='flex gap-2 flex-col lg:flex-row'>
                                    <input type="text" name='name' placeholder='Name*'className='p-2 rounded-md ' required />
                                    <input type="text" name='email' placeholder='Email Address*' className='p-2 rounded-md' required />
                                </div>
                                <input type="text" placeholder='Subject' name='subject' className='p-2 rounded-md'/>
                                <textarea type="text" name='message' placeholder='How can we help you?' className='p-2 rounded-md'/>
                                <button className='bg-[#00489A] p-2 rounded-lg text-white font-semibold' type='submit'>Request Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}
 
export default Contact;