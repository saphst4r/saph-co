import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {AiFillLinkedin} from 'react-icons/ai'

export default function About() {
  const [isHover, setIsHover] = useState(false);
  const openInNewTab = url =>{
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='bg-[#3E3546] min-h-[65vh] flex flex-col'>
      <section className="flex-1 sm:flex items-center justify-center sm:space-x-8 max-w-6xl mx-auto">
        <div className='relative flex py-6 px-3 text-[#C7DCD0] hover:text-[#3E3546] active:text-[#0077b5] transition duration-150 ease-in-out'>
          <img src="https://media-exp1.licdn.com/dms/image/D4D03AQEvElfRLrWNDQ/profile-displayphoto-shrink_800_800/0/1667357884032?e=1672876800&v=beta&t=ooQwptOLQEfVIpoPcRI3Uk_nCp4bKmDe6jevtVQv-TY" alt="SAPH" className='cursor-pointer max-h-[200px] shadow-md hover:shadow-xl active:shadow-xl mx-auto border-[10px] border-[#C7DCD0] hover:border-[#2E222F] active:border-[#0077b5] object-cover hover:scale-105 transition-scale duration-200 ease-in-out transition duration-150 ease-in-out'onMouseOver={()=>setIsHover(true)} onMouseOut={()=>setIsHover(false)} onClick={()=>openInNewTab("https://www.linkedin.com/in/asaphkim")}/>
          <AiFillLinkedin className=' text-2xl flex relative opacity-0 md:opacity-100 md:top-3 md:right-9 z-10'/>
        </div>
        <div className='text-[#C7DCD0] px-6'> 
          
          {/* start of about title */}
          <div className={`ABOUT-TITLE flex title uppercase text-3xl md:text-4xl mb-3 mx-auto`}> 
            <div className={`flex items-center mx-auto sm:mx-0`}>
              <div className={`title transition duration-500 ease-in-out ${isHover ? "-translate-x-[13px] md:transform-none" : "transform-none"}`}>
                About
              </div>              
              <div className={`title pl-6 transition duration-500 ease-in-out ${isHover ? "opacity-100 w-2 -translate-x-[13px] md:transform-none" : "opacity-0 w-0 transform-none"} `}>A</div> 
              <div className={`title relative transition duration-500 ease-in-out ${isHover ? "translate-x-[13px] md:translate-x-8" : "transform-none"}`}>SAPH</div>                 
            </div>
          </div>
          {/* end of about title */}   
          <div className='max-w-[400px]'>
            <p className='karla'>
              Asaph is an multimedia artist/creator and web developer. He was put on this earth to create fun and interesting things with other people. He studied design in Brooklyn and helped start up an Edtech robotics company in Korea. He spent the past year exploring web development and AI while moonlighting as a pixel artist for Drunken Dragon Entertainment.
              <br />
              <br />
              “I’m currently in my pixel art phase, so bear with me as I explore and relive the unadulterated fascination I had for 16bit video games as a child. ”
            </p>
          </div>    
        </div>
      </section>

      <section className='py-6'>
        <p className='karla text-center text-sm text-[#9BABB2]'>Wanna collaborate? <Link to="/contact" className='karla text-[#C7DCD0] hover:text-white transition duration-200 ease-in-out'>Message me</Link></p> 
      </section>

    </div>
  )
}
