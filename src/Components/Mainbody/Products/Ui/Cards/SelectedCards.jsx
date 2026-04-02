import React from 'react'

function SelectedCards({product, handleRemove, totalPrice, setTotalPrice}) {
  
  return (
      <div key={product.id}>
          <div className='p-8 flex justify-between'>
            <div className='flex justify-center items-center gap-2'>
              <img src={product.icon} alt="" />
              <div>
                <p>{product.name}</p>
                <span>${product.price}</span>
              </div>
            </div>
            <button onClick={()=> handleRemove(product)} className='cursor-pointer active:scale-[0.9] text-[#FF3980]'>Remove</button>
          </div>
      </div>
  )
}

export default SelectedCards