import React, { Suspense } from 'react'
import PriceCard from './PriceCard';

const PricingFetch = async () =>{
  const res = await fetch('/public/price.json');
  return res.json()
}

function PricingCards() {
  const data = PricingFetch()
  return (
    <div className='flex flex-col gap-2 my-12'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold'>Simple, Transparent Pricing</h2>
          <p className='opacity-[0.7] text-xs'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <Suspense fallback={<div> Loading...</div>}>
        <PriceCard data = {data} />
        </Suspense>
    </div>
  )
}

export default PricingCards