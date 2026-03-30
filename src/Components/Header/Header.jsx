import React from 'react'
import Navbar from './Navbar/Navbar'

function Header({notifyP}) {
  return (
    <header>
        <Navbar notify = {notifyP}/>
    </header>
  )
}

export default Header