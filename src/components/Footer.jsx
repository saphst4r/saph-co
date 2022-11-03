import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import logo from '../images/white-logo-1100.png'
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";
import instagram from "../images/instagram.png";

export default function Footer() {
    const navigate = useNavigate();
    const [isDesktop, setDesktop] = useState(false);

    useEffect(()=>{
        window.innerWidth > 1450 ? setDesktop(true) : setDesktop(false);
        const updateMedia = () =>{window.innerWidth > 1450 ? setDesktop(true) : setDesktop(false)}
        window.addEventListener('resize', updateMedia);
        return ()=> window.removeEventListener('resize',updateMedia);
    },[]);
    return (
        <footer>
            <div className="bg-[#2E222F] border-[#3E3546] border-t-[12px] shadow-sm bottom-0 pb-8 z-40 w-full ">
                <div className='flex justify-center pb-6 pt-3'>
                    <ul className='flex items-center justify-center space-x-2'>
                        <li className={`cursor-pointer py-3 px-3 text-md font-medium text-[#C7DCD0]`}>
                            <a href="https://twitter.com/saphst4r" target="_blank" rel="noopener noreferrer">{isDesktop ? (<p>Twitter</p>) :(<img src={twitter} alt="twitter" className="h-5 px-1 cursor-pointer"/>)}</a> 
                        </li>
                        <li className={`cursor-pointer py-3 px-3 text-md font-medium text-[#C7DCD0]`}>
                            <a href="https://discord.gg/tNGbwQVjNV" target="_blank" rel="noopener noreferrer">{isDesktop ? (<p>Discord</p>) :(<img src={discord} alt="twitter" className="h-5 px-1 cursor-pointer"/>)}</a> 
                        </li>
                        <li className={`cursor-pointer py-3 px-3 text-md font-medium text-[#C7DCD0]`}>
                            <a href="https://www.instagram.com/saphst4r/" target="_blank" rel="noopener noreferrer">{isDesktop ? (<p>Instagram</p>) :(<img src={instagram} alt="twitter" className="h-5 px-1 cursor-pointer"/>)}</a> 
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
