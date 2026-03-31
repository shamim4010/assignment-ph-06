import React, { use, useState } from 'react'
import Cards from '../Ui/Cards/Cards';

function BuyProducts({allProps, promiseProducts}) {
  const [selectProducts, setSelectProducts] = useState([])
  const products = use(promiseProducts);

  return (
    <div>
        
    </div>
  )
}

export default BuyProducts