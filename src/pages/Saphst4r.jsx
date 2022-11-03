import React from 'react';
import bannerSaphst4r from '../images/saphst4r_banner-lg.gif';
import saphst4rTitle from '../images/saphst4r_title.png';

export default function Saphst4r() {
  return (
    <div className='min-h-[65vh] flex flex-col'>
      <div className='flex-1 bg-[#3E3546]'>
        <div className='bg-[#2E222F] flex justify-center overflow-hidden w-full h-[200px] md:h-[370px]'>
          <img src={bannerSaphst4r} alt="saphst4r main banner" className='transition ai-off w-[100%] h-200 md:h-[370px]  object-cover' />
        </div>
        <div className='shadow-lg flex items-center justify-between bg-[#9BABB2] w-full h-[90px] border-t-[10px] border-[#C7DCD0] px-6 md:px-12'>
          <div className='bg-[#625565] w-[18px] h-[18px] border-t-4 border-[#3E3546] '></div>
          <div className='bg-[#625565] w-[18px] h-[18px] border-t-4 border-[#3E3546] '></div>
        </div>
        <div className='bg-[#625565] w-full h-[6px]'></div>
        <div className='transition flex items-center justify-between bg-[#9BABB2] w-full h-[90px] border-t-[10px] shadow-lg border-[#C7DCD0] px-6 md:px-12'>
          <div className='bg-[#625565] w-[18px] h-[18px] border-t-4 border-[#3E3546] '></div>
          <div className='bg-[#625565] w-[18px] h-[18px] border-t-4 border-[#3E3546] '></div>
        </div>  
        <div className='bg-[#2E222F] w-full h-[12px]'></div>

        {/* BLUE PANEL START */}
        <div className='flex w-full items-center justify-center '>
          <div className='transition space-y-4 md:space-y-2 justify-center absolute top-[322px] md:top-[490px] lg:top-[480px] bg-[#4D65B4] w-[75%] md:w-[65%] h-[130px] border-t-[12px] border-[#4D9BE6] drop-shadow-md m-auto'>
            <div className='flex justify-center pt-11'>
              <h1 className='title text-white text-2xl lg:text-3xl'>SAPHST4R - ORIGINAL 103</h1> 
            </div>
          </div>
        </div>
        {/* BLUE PANEL END */}

          
          <div className='w-full mt-8 text-[#7F708A]'>
            <div className='flex justify-center my-6'>
              <p className='text-center text-xs'>CNFT POLICY ID: <br/>dbdd62657f0fe1566a27fa017921f6a145e57cab5292a8894882675b</p>
            </div>
          </div>
          
          <div className='flex justify-center'>
            <div className='my-2 w-[120px] h-1 border-b-[3px] border-[#7F708A]'></div>
          </div>

          <section className='flex justify-center'>
            <div className='text-[#C7DCD0] py-6 px-12 w-full max-w-2xl'>
              <p>
                This serialized collection was minted for the 103 people who voted for it during an art contest during CNFTCON 2021. 
              </p>
              <br />
              <p>
                These serve as a free mint voucher in any future mint of choice. The only caveat is, you will have to <span className='text-[#E83B3B]'>burn</span> this NFT to redeem your free mint.
              </p>
            </div>
          </section>

          <section className='flex flex-col bg-[#3E3546] w-full justify-center py-7'>
          <p className='text-[#7F708A] text-center text-xs font-bold '>View the collection at:</p>
          <div className='flex justify-center'>
            <a href="https://www.jpg.store/collection/saphst4r" target="_blank" rel="noopener noreferrer">
              <div className=' bg-[#D5E04B] mt-4 py-4 px-24 border-x-4 border-b-8 border-[#808352] text-[#808352] text-xl shadow-md hover:shadow-lg hover:bg-[#FBFF86] hover:border-[#CDDF6C]  active:shadow-lg active:bg-[#547E64] active:border-[#374E4A] transition duration-150 ease-in-out cursor-pointer'>JPG.STORE</div>
            </a>
          </div>

        </section>

        {/* THEME OVERLAY */}
        <section className='absolute w-full top-[485px] md:top-[655px] lg:top-[650px] pointer-events-none'>
          <div className='flex justify-between'>
            <div className='shadow-lg h-[65px] w-[30px] md:h-[65px] md:w-[60px] lg:w-[110px] bg-[#4D65B4] flex items-center justify-start'>
              <div className='h-[45px] w-[12px] md:h-[45px] md:w-[25px] bg-[#4D9BE6]'></div>
            </div>
            <div className='shadow-lg h-[65px] w-[30px] md:h-[65px] md:w-[60px] lg:w-[110px] bg-[#4D65B4] flex items-center justify-end'>
              <div className='h-[45px] w-[12px] md:h-[45px] md:w-[25px] bg-[#4D9BE6]'></div>
            </div>
          </div>

          {/* GRAY SIDE BARS START */}
          <div className='w-full flex justify-between'>
            <div className='shadow-lg h-[386px] w-[22px] md:h-[360px] md:w-[45px] lg:w-[85px] bg-[#9BABB2] flex justify-start items-end'>
              <div className='h-[370px] w-[8px] md:h-[345px] md:w-[22px] bg-[#C7DCD0]'></div>
            </div>
            <div className='shadow-lg h-[386px] w-[22px] md:h-[360px] md:w-[45px] lg:w-[85px] bg-[#9BABB2] flex justify-end items-end'>
              <div className='h-[370px] w-[8px] md:h-[345px] md:w-[22px] bg-[#C7DCD0]'></div>
            </div>

          </div>
          {/* GRAY SIDE BARS END */}

          <div className='flex justify-between'>
            <div className='shadow-lg h-[65px] w-[30px] md:h-[65px] md:w-[60px] lg:w-[110px] bg-[#4D65B4] flex items-center justify-start'>
              <div className='h-[45px] w-[12px] md:h-[45px] md:w-[25px] bg-[#4D9BE6]'></div>
            </div>
            <div className='shadow-lg h-[65px] w-[30px] md:h-[65px] md:w-[60px] lg:w-[110px] bg-[#4D65B4] flex items-center justify-end'>
              <div className='h-[45px] w-[12px] md:h-[45px] md:w-[25px] bg-[#4D9BE6]'></div>
            </div>
          </div>

        </section>
      </div>

    </div>
  )
}
