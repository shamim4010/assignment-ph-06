import React, { useState } from 'react'
import { IoFileTray } from 'react-icons/io5'
import SelectedCards from '../Ui/Cards/SelectedCards'


function Carts({allProps, selectProducts, setSelectProducts}) {
  let totalPrice = 0;
  const handleRemove = (product) => {
    const filterProducts = selectProducts.filter(item => item.name !== product.name)
    setSelectProducts(filterProducts)
    allProps.setNotifyCount(allProps.notifyCount - 1)
  }
  selectProducts.map(price => {
    totalPrice += price.price
  })
  const clearData = () => {
    setSelectProducts([])
    allProps.setNotifyCount(0)
  }
  return (
    <div>
      {selectProducts.length === 0 ? <div className=' grid place-items-center gap-2'>
        <IoFileTray className='text-4xl'/>
        <p>No Products Fund</p>
        <p>Select products</p>
      </div>:<div className='p-12 flex flex-col gap-2'>
          <h2 className='text-2xl'>Your Cart</h2>
          {selectProducts.map((product) => {
            return (
              <SelectedCards {...{product, handleRemove, totalPrice}} />
            )
          })}
          <div className='flex justify-between'>
            <p>Total</p>
            <span>${totalPrice}</span>
          </div>
          <button onClick={clearData} className='btn rounded-4xl bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-white'>Proceed to Checkout</button>
        </div>}
    </div>
  )
}

export default Carts