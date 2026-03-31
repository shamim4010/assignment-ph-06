import React from 'react'
import Products from './Products/Products'

function Mainbody({allProps}) {
  return (
    <div>
      <Products allProps = {allProps} />
    </div>
  )
}

export default Mainbody