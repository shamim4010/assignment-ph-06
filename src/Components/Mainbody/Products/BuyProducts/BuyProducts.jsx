import React, { use, useState } from 'react'
import Cards from '../Ui/Cards/Cards';

function BuyProducts({allProps, promiseProducts, selectProducts, setSelectProducts}) {
  const products = use(promiseProducts);

  return (
    <div className='px-12 transition-all duration-[0.8s] ease-in-out grid place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => {
          return (
            <Cards {...{allProps, product, selectProducts, setSelectProducts}} />
          );
        })}
    </div>
  )
}

export default BuyProducts