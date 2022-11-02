import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Works() {
  const {REACT_APP_IG_ACCESS_TOKEN} = process.env
  const [igPosts, setIgPosts] = useState([]);
  useEffect(()=>{
    async function fetchPosts(){
      try {
        const postsSnap = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=${REACT_APP_IG_ACCESS_TOKEN}`) 
        setIgPosts(postsSnap.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  },[]);

  return (
    <div className='min-h-[65vh] flex flex-col bg-[#3E3546] pt-4'>
      <div className='flex-1 max-w-6xl mx-auto space-y-6'>
        <header className=''>
          <h1 className='title text-[#C7DCD0] text-2xl md:text-3xl text-center py-6'>Works</h1>
        </header>
        <div>
          <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {igPosts.map((post)=>(
              <li className='relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl transition-shadow duration-150 m-[10px]' key={post.id}>
                {post.media_type==="VIDEO" 
                  ? (<video src={post.media_url} type="video/mp4" className='max-h-[256px] w-full object-cover hover:scale-110 transition-scale duration-200 ease-in-out' muted="muted" onMouseOver={(e)=>{e.target.play()}} onMouseOut={(e)=>{e.target.pause();e.target.currentTime=0}} onEnded={(e)=>{e.target.currentTime=0;e.target.play()}} loading='lazy'></video>)
                  :(<img src={post.media_url} alt={post.id} className='max-h-[256px] w-full object-cover hover:scale-110 transition-scale duration-200 ease-in-out'
                  loading='lazy' />)}
              </li>

            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
