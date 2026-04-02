import React from 'react'

function Workflow() {
  return (
    <div className='bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-white text-center flex flex-col items-center gap-3 p-12'>
        <h1 className='text-3xl font-bold'>Ready to Transform Your Workflow?</h1>
        <p className='text-xs opacity-[0.7]'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
        <div className='flex flex-col sm:flex-row gap-2'>
            <div className='btn rounded-4xl'><button className='bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-transparent bg-clip-text'>Explore Products</button></div>
            <button className='btn bg-[#00000000] rounded-4xl border border-1 border-white text-white sm:px-10'>Pricing</button>
        </div>
        <p className='text-xs opacity-[0.7]'>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  )
}

export default Workflow