import React, { use, useState } from 'react'
import Cards from '../Ui/Cards/Cards';

function BuyProducts({allProps, promiseProducts}) {
  const [selectProducts, setSelectProducts] = useState([])
  const products = use(promiseProducts);

  return (
    <div>
        {products.map((product) => {
          return (
            <Cards {...{allProps, product, selectProducts, setSelectProducts}} />
          );
        })}
    </div>
  )
}

export default BuyProducts