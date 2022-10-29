import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import logo from "../images/white-logo-1100.png"
import twitter from "../images/twitter.png";
import discord from "../images/discord.png"

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    function pathMatchRoute(route){
        if(route === location.pathname)
            return true;
    }

  return (
    <div className="bg-[#2E222F] border-[#3E3546] border-b-[12px] shadow-sm sticky top-0 pt-2 z-40">
        <header className="flex justify-between items-end px-3 w-full mx-auto">
            <div className="">
                <img src={logo} alt="logo" className="mb-2 h-12 cursor-pointer" onClick={()=>navigate('/')}/>
            </div>
            <nav className='flex items-end'>
                <ul className="flex space-x-5 items-center">
                    <li className={`cursor-pointer py-3 px-7 text-xl font-medium text-[#C7DCD0] ${pathMatchRoute('/') && "bg-[#3E3546] text-white rounded-t-lg"}`} onClick={()=>navigate('/')} >
                        Home
                    </li>
                    <li >
                        <button className={`peer cursor-pointer py-3 px-7 text-xl font-medium text-[#C7DCD0] hover:bg-[#3E3546] hover:text-white hover:rounded-t-lg transition duration-150 ease-in-out flex whitespace-nowrap ${pathMatchRoute('/nft/:category') && "bg-[#3E3546] text-white rounded-t-lg"} `}>
                            NFTs
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="caret-down"
                                className="w-2 ml-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                ></path>
                            </svg> 
                        </button>
                        <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-[#7F708A] drop-shadow-lg z-50 fixed">
                            <ul>
                                <li className="px-5 py-3 text-[#C7DCD0] hover:bg-[#694F62] hover:text-white" onClick={()=>navigate('/nfts/saphst4r')} >
                                    SAPHST4R
                                </li>
                                <li className="px-5 py-3 text-[#C7DCD0] hover:bg-[#694F62] hover:text-white" onClick={()=>navigate('/nfts/pocketdice')} >
                                    POCKET DICE
                                </li>
                            </ul>
                        </div>   
                    </li>                    
                    <li className={`cursor-pointer py-3 px-7 text-xl font-medium text-[#C7DCD0] ${pathMatchRoute('/works') && "bg-[#3E3546] text-white rounded-t-lg"}`} onClick={()=>navigate('/works')} >
                        Works
                    </li>
                    <li className={`cursor-pointer py-3 px-7 text-xl font-medium text-[#C7DCD0] ${pathMatchRoute('/about') && "bg-[#3E3546] text-white rounded-t-lg"}`} onClick={()=>navigate('/about')} >
                        About
                    </li>
                    {/* <li className={`cursor-pointer py-3 px-7 text-xl font-medium text-[#C7DCD0] ${pathMatchRoute('/contact') && "bg-[#3E3546] text-white rounded-t-lg"}`} onClick={()=>navigate('/contact')} >
                        Contact
                    </li> */}
                    <li>
                        <a href="https://twitter.com/saphst4r">
                            <img src={twitter} alt="twitter" className="h-5 px-1 cursor-pointer"/>
                        </a>
                        
                    </li>
                    <li>
                        <a href="https://discord.gg/tNGbwQVjNV">
                            <img src={discord} alt="twitter" className="h-5 px-1 cursor-pointer" />
                        </a>
                        
                    </li>


                </ul>

            </nav>
        </header>
    </div>
  )
}
