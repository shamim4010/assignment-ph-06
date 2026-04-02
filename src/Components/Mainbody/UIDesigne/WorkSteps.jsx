import React from 'react'

function WorkSteps() {
  return (
    <div className='px-12 py-30'>
      <div className='text-center'>
        <h2 className='text-2xl'>Get Started in 3 Steps</h2>
        <p className='text-xs opacity-[0.6] mb-9'>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div className='grid place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col justify-center items-center gap-3 p-8 rounded-lg shadow-[0_0_18px_rgba(79,57,246,0.3),0_0_18px_rgba(149,20,250,0.3)]'>
          <div className='w-full flex justify-end'>
            <div className='bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] px-2 py-[5px] text-white rounded-full'>01</div>
          </div>
          <img src="/src/assets/user.png" alt="user" width={50} />
          <h2 className='text-2xl'>Create Account</h2>
          <p className='text-xs opacity-[0.7]'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 p-8 rounded-lg shadow-[0_0_12px_rgba(79,57,246,0.3),0_0_12px_rgba(149,20,250,0.3)]'>
          <div className='w-full flex justify-end'>
            <div className='bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] px-2 py-[5px] text-white rounded-full'>02</div>
          </div>
          <img src="/src/assets/package.png" alt="user" width={50} />
          <h2 className='text-2xl'>Choose Products</h2>
          <p className='text-xs opacity-[0.7]'>Browse our catalog and select the tool sthat fit your needs.</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 p-8 rounded-lg shadow-[0_0_12px_rgba(79,57,246,0.3),0_0_12px_rgba(149,20,250,0.3)]'>
          <div className='w-full flex justify-end'>
            <div className='bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] px-2 py-[5px] text-white rounded-full'>03</div>
          </div>
          <img src="/src/assets/rocket.png" alt="user" width={50} />
          <h2 className='text-2xl'>Start Creating</h2>
          <p className='text-xs opacity-[0.7]'>Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  )
}

export default WorkSteps