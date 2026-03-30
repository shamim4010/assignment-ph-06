import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'

function Header({notifyP}) {
  return (
    <header>
        <Navbar notify = {notifyP}/>
        <Banner />
    </header>
  )
}

export default Header