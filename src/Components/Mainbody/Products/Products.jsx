import React from 'react'
import Toggle from './Toggle/Toggle'
import BuyProducts from './BuyProducts/BuyProducts'
import Carts from './Carts/Carts'

function Products({allProps}) {
  return (
    <div>
        <Toggle allProps = {allProps} />
        {allProps.toggle === 'products' ? <BuyProducts />:<Carts />}
    </div>
  )
}

export default Products 
