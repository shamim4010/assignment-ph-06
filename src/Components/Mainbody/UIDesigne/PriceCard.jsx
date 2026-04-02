import React, { use, useState } from 'react'
import CardP from './CardP'

function PriceCard({data}) {
    const [isActive, setIsActive] = useState(2)
    const PriceInfo = use(data)
    console.log(PriceInfo)
    
    return (
        <div className='p-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {PriceInfo.map(product => {
                return (
                    <CardP {...{product, isActive, setIsActive}} />
                )
            })}
        </div>
    )
}

export default PriceCard