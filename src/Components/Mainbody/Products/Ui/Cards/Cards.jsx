import React, { useState } from 'react'

function Cards({allProps, product, selectProducts, setSelectProducts}) {
    const [isBuy, setIsBuy] = useState(false);

    const handleMange = () => {
        const timeOut = setTimeout(() => {
            setIsBuy(true)
        },0);
        setTimeout(() => {
            setIsBuy(false)
        }, 3000);
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-end'>
                        <span className={`badge badge-xs ${product.tag === "best seller" ? 'bg-amber-200 text-amber-600' : product.tag === "popular" ? 'bg-purple-200 text-purple-500' : 'bg-green-200 text-green-600'}`}>{product.tag}</span>
                    </div>
                    <img src={product.icon} alt="icon" width={30}/>
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className='opacity-[0.8] text-xs'>{product.description}</p>
                    <span className="text-xl">${product.price}/{product.period}</span>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {product.features.map(item => {
                            return (<li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{item}</span>
                            </li>)
                        })}
                    </ul>
                    <div className="mt-6">
                        <button onClick={handleMange} className={`btn btn-block rounded-4xl transition-all duration-[0.4s] ease-in ${isBuy ? 'bg-[linear-gradient(120deg,#38F9D7_0%,#96e6a1_100%)] text-black scale-[0.9]':'bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-white scale-[0.8]'}`}>{isBuy ? 'Add to Cart Success':'Buy Product' }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
