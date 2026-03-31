import React, { Suspense, useState } from 'react'
import Toggle from './Toggle/Toggle'
import BuyProducts from './BuyProducts/BuyProducts'
import Carts from './Carts/Carts'

const fetchProducts = async () => {
  const res = await fetch('/public/products.json');
  return res.json();
}

function Products({allProps}) {
  const promiseProducts = fetchProducts()
  const [selectProducts, setSelectProducts] = useState([]);
  
  return (
    <div>
        <Toggle allProps = {allProps} />
        <Suspense fallback={<span className="loading loading-spinner text-primary loading-xl"></span>}>
          {allProps.toggle === 'products' ? <BuyProducts {...{allProps, promiseProducts, selectProducts, setSelectProducts}} />:<Carts {...{selectProducts, setSelectProducts}} />}
        </Suspense>
    </div>
  )
}

export default Products 
