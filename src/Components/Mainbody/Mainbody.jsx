import React from 'react'
import Products from './Products/Products'
import Counter from './UIDesigne/Counter'
import WorkSteps from './UIDesigne/WorkSteps'
import PricingCards from './UIDesigne/PricingCards'
import Workflow from './UIDesigne/Workflow'

function Mainbody({allProps}) {
  return (
    <div>
      <Counter />
      <Products allProps = {allProps} />
      <WorkSteps />
      <PricingCards />
      <Workflow />
    </div>
  )
}

export default Mainbody