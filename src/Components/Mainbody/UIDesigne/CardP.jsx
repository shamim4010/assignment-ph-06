import React, { useState } from 'react'

function CardP({product, isActive, setIsActive}) {
    
    return (
            <div onClick={()=> setIsActive(product.id)} className={`card m-2  ${isActive === product.id ? 'bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] scale-y-[1.2] my-8 text-white':'bg-base-100'} shadow-[0_0_18px_rgba(79,57,246,0.3),0_0_18px_rgba(149,20,250,0.3)]`}>
                <div className="card-body">
                    <div className='relative'>
                        <span className={`badge badge-xs absolute left-[50%] translate-x-[-50%] top-[-31px] ${product.tag === "Most Popular" ? 'bg-amber-200 text-amber-600' : product.tag === "Free" ? 'bg-purple-200 text-purple-500' : 'bg-green-200 text-green-600'}`}>{product.tag}</span>
                    </div>
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className='opacity-[0.8] text-xs'>{product.description}</p>
                    <div><span className='text-2xl'>${product.price}</span><span className='text-sm align-text-bottom'>/{product.period}</span></div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {product.features.map(item => {
                            return (<li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{item}</span>
                            </li>)
                        })}
                    </ul>
                    <div className="mt-6 w-full">
                        <button className={`btn w-full ${isActive === product.id ? 'bg-base-100 text-black':'bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-white'}`}>{product.buttonText}</button>
                    </div>
                </div>
            </div>
        
    )
}

export default CardP