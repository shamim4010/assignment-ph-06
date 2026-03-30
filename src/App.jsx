import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Mainbody from './Components/Mainbody/Mainbody'
import Footer from './Components/Footer/Footer'

function App() {
  const [notify, setNotify] = useState(0  )

  return (
    <>
      <Header />
      <Mainbody />
      <Footer />
    </>
  )
}

export default App