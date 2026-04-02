import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className=' bg-[#101727] text-white px-12 pt-12 pb-6'>
      <div className='grid grid-cols-2 place-items-left gap-6  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        <div>
          <h2 className='text-3xl font-bold'>DigiTools</h2>
          <p  className='text-xs opacity-[0.7]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl font-bold'>Product</h3>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Features</a>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Pricing</a>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Templates</a>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Integrations</a>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl font-bold'>Company</h3>
          <a className='text-xs opacity-[0.7] cursor-pointer'>About</a>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Blog</a>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Careers</a>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Press</a>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl font-bold'>Resources</h3>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Documentation</a>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Help Center</a>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Community</a>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Contact</a>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl font-bold'>Social Links</h3>
          <div className='flex gap-2'>
            <button className='btn btn-sm py-[17px] rounded-full'><FaInstagram /></button>
            <button className='btn btn-sm py-[17.5px] rounded-full'><FaFacebook /></button>
            <button className='btn btn-sm py-[17px] rounded-full'><FaTwitter /></button>
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] opacity-[0.4] mt-8 mb-5 bg-white'></div>
      <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-between'>
        <p className='text-xs opacity-[0.7]'>© 2026 Digitools. All rights reserved.</p>
        <div className='flex gap-4'>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Privacy Policy</a>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Terms of Service</a>
          <a className='text-xs opacity-[0.7] cursor-pointer'>Cookies</a>
        </div>
      </div>
    </div>
  )
}

export default Footer