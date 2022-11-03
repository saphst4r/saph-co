import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useState} from "react";
import logo from "../images/white-logo-1100.png";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";
import instagram from "../images/instagram.png";
import saphst4rThumbnail from "../images/saphst4r-thumbnail.gif";
import pocketDiceThumbnail from "../images/pocketDice-thumbnail.gif";
import { BsFillCaretDownFill, BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi";
import{IoIosClose} from "react-icons/io";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isChooseNFT, setIsChooseNFT] = useState(false);
    const [isHoveringParent, setIsHoveringParent] = useState({
        "saphst4r": false,
        "pocketDice": false,
    });
    const navigate = useNavigate();
    const location = useLocation();

    function pathMatchRoute(route){
        if(route === location.pathname)
            return true;
    }

  return (
    <div className="bg-[#2E222F] border-[#3E3546] border-b-[12px] shadow-sm sticky top-0 pt-4 z-40">
        <header className="flex justify-between items-center px-8 w-full mx-auto">
            <div>
                <img src={logo} alt="logo" className=" fixed top-3 left-3 h-12 cursor-pointer" onClick={()=>navigate('/')}/>
            </div>
            <nav className='flex'>
                
                <ul className="DESKTOP-MENU hidden lg:flex space-x-5 items-end">
                    <li className={`cursor-pointer py-3 px-7 text-xl font-medium text-[#C7DCD0] ${pathMatchRoute('/') && "bg-[#3E3546] text-white rounded-t-lg"}`} onClick={()=>navigate('/')} >
                        Home
                    </li>
                    <li >
                        <button className={`items-center peer cursor-pointer py-3 px-7 text-xl font-medium text-[#C7DCD0] hover:bg-[#3E3546] hover:text-white hover:rounded-t-lg transition duration-150 ease-in-out flex whitespace-nowrap ${pathMatchRoute('/nfts/saphst4r'||'/nfts/pocketdice') && "bg-[#3E3546] text-white rounded-t-lg"} `}>
                            NFTs
                            <BsFillCaretDownFill className="ml-2 text-sm"/>
                        </button>
                        <div className="hidden peer-hover:flex hover:flex w-[220px] flex-col bg-[#7F708A] drop-shadow-lg z-50 absolute">
                            <ul>
                                <li className="flex items-center cursor-pointer px-3 py-3 text-[#C7DCD0] border-b-[3px] border-[#694F62] hover:bg-[#694F62] hover:text-white" onClick={()=>navigate('/nfts/saphst4r')} onMouseOver={()=>setIsHoveringParent(()=>({"saphst4r": true, "pocketDice": false}))} onMouseOut={()=>setIsHoveringParent(()=>({"saphst4r": false, "pocketDice": false}))} >
                                    <img src={saphst4rThumbnail} alt="saphst4r thumbnail" className={`h-10 border-[3px] border-[#694F62] rounded mr-4 ${isHoveringParent.saphst4r ? "grayscale-0" : "grayscale"}`} />
                                    SAPHST4R
                                </li>
                                <li className="flex items-center cursor-pointer px-3 py-3 text-[#C7DCD0] border-b-[3px] border-[#694F62] hover:bg-[#694F62] hover:text-white" onClick={()=>navigate('/nfts/pocketdice')} onMouseOver={()=>setIsHoveringParent(()=>({"saphst4r": false, "pocketDice": true}))} onMouseOut={()=>setIsHoveringParent(()=>({"saphst4r": false, "pocketDice": false}))} >
                                    <img src={pocketDiceThumbnail} alt="pocketdice thumbnail" className={`h-10 border-[3px] border-[#694F62] rounded mr-4 ${isHoveringParent.pocketDice ? "grayscale-0" : "grayscale"}`} />
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
                </ul>
                <section className="flex items-center px-8">
                    <ul className="flex space-x-5">
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
                        <li>
                            <a href="https://www.instagram.com/saphst4r/">
                                <img src={instagram} alt="instagram" className="h-5 px-1 cursor-pointer" />
                            </a>
                            
                        </li>

                    </ul>
                </section>
                <section className="MOBILE-MENU flex lg:hidden py-3">
                    <div className="HAMBURGER-ICON space-y-2" onClick={()=>setIsNavOpen((prevState)=>!prevState)} >
                    <GiHamburgerMenu className="text-[#C7DCD0] text-4xl"/>
                    </div>
                    <div className={isNavOpen? "showMenuNav" : "hideMenuNav"}>
                        <div className={`w-full h-full transition duration-300 ${isChooseNFT ? "bg-[#3E3546]" : "bg-[#2E222F]"} `}>
                            <div className="CROSS-ICON absolute top-0 right-0 px-4 py-4" >
                                <IoIosClose className="text-[#C7DCD0] text-6xl" onClick={() => setIsNavOpen(false)}/>
                            </div>
                            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                <li className={`cursor-pointer my-8 uppercase ${isChooseNFT ? "font-bold border-b-0 text-[#2E222F]" : "font-normal text-[#C7DCD0] border-b-[3px] border-[#C7DCD0]"}`}>
                                    <div onClick={()=>{setIsNavOpen(false); navigate("/")}}>Home</div>
                                </li>
                                <li className={`flex space-x-3 ${isChooseNFT ? "bg-[#2E222F] w-full justify-center" : "bg-transparent"}`}>
                                    <div className={`flex items-center my-8 uppercase`} onClick={()=>setIsChooseNFT((prevState)=>!prevState)}>
                                        <div className="cursor-pointer flex items-center">
                                            {isChooseNFT ? <div className="h-full text-xs text-[#625565]"><BsFillCaretLeftFill className="absolute left-4  "/></div> 
                                                : <div className="text-xs text-[#C7DCD0]">
                                                    <BsFillCaretRightFill/>
                                                </div>
                                            }
                                                <div className={isChooseNFT ? "text-xl font-semibold text-[#625565]" : " text-[#C7DCD0] border-b-[3px] border-[#C7DCD0]"}>nfts</div>
                                        </div>
                                        {isChooseNFT && <div className="ml-3 h-16 w-2 border-l-[3px] border-y-[3px] rounded-sm border-[#625565]"></div>}
                                    </div>

                                    {isChooseNFT && 
                                        <div>
                                            <ul>
                                                <li className="cursor-pointer my-8 uppercase">
                                                    <div className="flex items-center" onClick={()=>{setIsNavOpen(false); setIsChooseNFT(false);navigate("/nfts/saphst4r")}}>
                                                        <img src={saphst4rThumbnail} alt="saphst4r thumbnail" className="h-8 border-[3px] border-[#625565] rounded mr-2" />
                                                        <p className="">saphst4r</p>
                                                        <p className="px-2 text-xs">(sold out)</p> 
                                                    </div>
                                                </li>
                                                <li className="cursor-pointer my-8 uppercase">
                                                    <div className="flex items-center" onClick={()=>{setIsNavOpen(false); setIsChooseNFT(false); navigate("/nfts/pocketdice")}}>
                                                        <img src={pocketDiceThumbnail} alt="pocketdice thumbnail" className="h-8 border-[3px] border-[#625565] rounded mr-2" />
                                                        <p className="">pocket dice</p>
                                                        <p className="px-2 text-xs">(TBA)</p> 
                                                    </div>
                                                </li>
                                                {/* ADD NEW COLLECTION ITEMS AS LI HERE */}
                                            </ul> 
                                        </div> 
                                    }
                                    
                                    
                                </li>
                                <li className={`cursor-pointer my-8 uppercase ${isChooseNFT ? "font-bold border-b-0 text-[#2E222F]" : "font-normal text-[#C7DCD0] border-b-[3px] border-[#C7DCD0]"}`}>
                                    <div onClick={()=>{setIsNavOpen(false); navigate("/works")}}>Works</div>
                                </li>
                                <li className={`cursor-pointer my-8 uppercase ${isChooseNFT ? "font-bold border-b-0 text-[#2E222F]" : "font-normal text-[#C7DCD0] border-b-[3px] border-[#C7DCD0]"}`}>
                                    <div onClick={()=>{setIsNavOpen(false); navigate("/about")}}>About</div>
                                </li>
                                <li className={`cursor-pointer my-8 uppercase ${isChooseNFT ? "font-bold border-b-0 text-[#2E222F]" : "font-normal text-[#C7DCD0] border-b-[3px] border-[#C7DCD0]"}`}>
                                    <div onClick={()=>{setIsNavOpen(false); navigate("/contact")}}>Contact</div>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </section>
            </nav>
        </header>
    </div>
  )
}
