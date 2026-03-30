import React from 'react'

function Navbar() {
  return (
    <div className="navbar shadow-lg px-12">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content rounded-box z-1 bg-gray-200 mt-3 w-52 p-2 shadow">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testimonais</a></li>
                <li><a>FAQ</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testimonais</a></li>
                <li><a>FAQ</a></li>
            </ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
            <div className="flex-none"> 
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                    <span className="p-2.5 rounded-full bg-red-500 relative right-3 top-[-8px] text-white"><div className='absolute top-[3.2px] left-[30%] text-xs'>8</div></span>
                </div>
            </div>
            <button><a>Login</a></button>
            <a className="px-[12px] py-[8px] text-white rounded-4xl bg-[linear-gradient(to_right,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] cursor-pointer active:scale-[0.98]">Get Started</a>
        </div>
    </div>
  )
}

export default Navbar