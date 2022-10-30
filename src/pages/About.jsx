import React from 'react'

export default function About() {
  return (
    <div className='bg-[#3E3546] min-h-screen flex flex-col'>
      <div className="flex-1 flex items-center justify-center space-x-6">
        <div className=' h-[200px] w-[200px] bg-[#C7DCD0]'>
          image placeholder
        </div>
        <div>
          <h1 className='uppercase'><span>Who</span> is a<span> </span>SAPH?</h1>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  )
}
