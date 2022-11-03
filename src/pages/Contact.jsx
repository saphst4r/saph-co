import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function Contact() {
  const form = useRef();
  const {REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY} = process.env
  async function onSubmit(e){
    e.preventDefault();
    try {
      await emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form.current, REACT_APP_PUBLIC_KEY)
      e.target.reset();
      toast.success("Message Sent Successfully!");
    } catch (error) {
      toast.error("Could not send message!");
    }

  }

  return (
    <div className='min-h-[65vh] flex flex-col w-full bg-[#3E3546]'>
      <div className='flex-1'>
        <h1 className='title text-center text-[#C7DCD0] text-4xl mt-6 font-bold'>Contact me</h1>
        <section className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
          <form ref={form} onSubmit={onSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-[#c7dcd0] text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-[#2E222F] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="first_name" placeholder="Jane" onFocus={(e)=>e.target.placeholder=""} onBlur={(e)=>e.target.placeholder="Jane"} required/>
                <p className="text-red-500 text-xs italic">*required field</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-[#c7dcd0] text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-[#2E222F] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="last_name" placeholder="Doe" onFocus={(e)=>e.target.placeholder=""} onBlur={(e)=>e.target.placeholder="Doe"}/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-[#c7dcd0] text-xs font-bold mb-2" htmlFor="grid-password">
                  E-mail
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-[#2E222F] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="user_email" required/>
                <p className="text-red-500 text-xs italic">*required field</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-[#c7dcd0] text-xs font-bold mb-2" htmlFor="grid-password">
                  Message
                </label>
                <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-[#2E222F] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message" required></textarea>

              </div>
            </div>
            <div className="md:flex md:items-center ">
              <div className="md:w-1/3 ">
                <button className="w-full shadow bg-teal-400 hover:bg-teal-500  focus:bg-teal-500 active:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
