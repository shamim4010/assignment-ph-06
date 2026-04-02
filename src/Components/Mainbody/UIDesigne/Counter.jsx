import React from 'react'

function Counter() {
  return (
    <div className='w-full flex justify-center items-center gap-10 py-10 bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)]  text-white'>
      <div className='text-center'>
        <h2>50K+</h2>
        <p>Active Users</p>
      </div>
      <div className='w-[1px] h-10 bg-white opacity-38'></div>
      <div className='text-center'>
        <h2>200+</h2>
        <p>Premium Tools</p>
      </div>
      <div className='w-[1px] h-10 bg-white opacity-38'></div>
      <div className='text-center'>
        <h2>4.9</h2>
        <p>Rating</p>
      </div>
    </div>
  )
}

export default Counter