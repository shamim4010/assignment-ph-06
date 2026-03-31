import React from 'react'

function Toggle({allProps}) {
  return (
    <div className='p-12 flex flex-col justify-center items-center gap-2'>
        
        <h2 className='text-2xl font-bold'>Premium Digital Tools</h2>
        <p className='text-[14px] opacity-[0.7] text-wrap text-center'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
        
        <div className='flex  px-3 my-6 rounded-4xl shadow-[0_0_12px_rgba(0,0,0,0.3)]'>
            <button onClick={()=> allProps.setToggle('products')} className={`btn btn-sm border-none rounded-4xl ${allProps.toggle === 'products' && 'bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-white'}`}>Products</button>
            <button onClick={()=> allProps.setToggle('carts')} className={`btn btn-sm border-none rounded-4xl ${allProps.toggle === 'carts' && 'bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-white'}`}>Cart {allProps.notifyCount !== 0 && <span>&#40; {allProps.notifyCount} &#41;</span>}</button>
        </div>
    </div>
  )
}

export default Toggle