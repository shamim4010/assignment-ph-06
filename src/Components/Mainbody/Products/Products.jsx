import React, { Suspense } from 'react'
import Toggle from './Toggle/Toggle'
import BuyProducts from './BuyProducts/BuyProducts'
import Carts from './Carts/Carts'

const fetchProducts = async () => {
  const res = await fetch('/public/products.json');
  return res.json();
}

function Products({allProps}) {
  const promiseProducts = fetchProducts()
  
  return (
    <div>
        <Toggle allProps = {allProps} />
        <Suspense fallback={<span className="loading loading-spinner text-primary loading-xl"></span>}>
          {allProps.toggle === 'products' ? <BuyProducts {...{allProps, promiseProducts}} />:<Carts />}
        </Suspense>
    </div>
  )
}

export default Products 
