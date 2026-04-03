import React from 'react'
import play from '../../../assets/Play.png'
import banner from '../../../assets/banner.png'

function Banner() {
  return (
    <div className='p-12 flex flex-col justify-center items-center gap-5 md:flex-row md:justify-between'>
      <div className='flex flex-col gap-4 justify-center items-center md:items-start '>
        <div className='px-2 py-1 w-[220px] bg-purple-100 rounded-4xl flex justify-center items-center gap-2'>
          <div className='p-0.5 rounded-full bg-purple-300'><div className='p-[2px] rounded-full bg-purple-400'><div className='p-[2px] rounded-full bg-purple-500'></div></div></div>
          <p className='text-xs bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-transparent bg-clip-text'>New: AI-Powered Tools Available</p>
        </div>
        <h2 className='text-3xl'>Supercharge Your Digital Workflow</h2>
        <p className='text-xs opacity-[0.7]'>
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
        </p>
        <div className='flex md:flex-col lg:flex-row gap-2'>
          <button className='btn rounded-4xl text-white bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)]'>Explore Products</button>
          <button className='rounded-4xl bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] border border-1 '><p className='btn border-none bg-white w-full  rounded-4xl'><span className='bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-transparent bg-clip-text flex gap-2'> <img src={play} alt="" /> Watch Demo</span></p></button>
        </div>
      </div>
      <img src={banner} alt="banner" width={500} />
    </div>
  )
}

export default Banner