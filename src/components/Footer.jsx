import React from 'react'
import {useNavigate} from 'react-router-dom';
import logo from '../images/white-logo-1100.png'

export default function Footer() {
    const navigate = useNavigate();
    return (
        <footer>
            <div className="bg-[#2E222F] border-[#3E3546] border-t-[12px] shadow-sm bottom-0 pb-8 z-40 w-full ">
                <div className='flex justify-center pb-6 pt-3'>
                    <ul className='flex items-center justify-center space-x-2'>
                        <li className={`cursor-pointer py-3 px-3 text-md font-medium text-[#C7DCD0]`}>
                            <a href="https://twitter.com/saphst4r">Twitter</a> 
                        </li>
                        <li className={`cursor-pointer py-3 px-3 text-md font-medium text-[#C7DCD0]`}>
                            <a href="https://discord.gg/tNGbwQVjNV">Discord</a> 
                        </li>
                        <li className={`cursor-pointer  px-3 text-md font-medium text-[#C7DCD0]`} onClick={()=>navigate('/contact')} >
                            Contact
                        </li>
                        <li className={`cursor-pointer py-3 px-3 text-md font-medium text-[#C7DCD0]`} onClick={()=>navigate('/about')} >
                            About
                        </li>                       
                    </ul>
                </div>                
                <div className="flex justify-center items-center">
                    <img src={logo} alt="logo" className="mb-2 h-32 cursor-pointer" onClick={()=>navigate('/')}/>

                </div>
                <div className="flex justify-center items-center">
                    <p className='text-[#C7DCD0] text-xs font-medium'>© 2022 SAPH.CO</p>
                </div>
            </div>
        </footer>
     )
}
