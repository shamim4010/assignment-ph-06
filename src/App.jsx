import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Mainbody from './Components/Mainbody/Mainbody'
import Footer from './Components/Footer/Footer'

function App() {
  const [notifyCount, setNotifyCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState('products');

  const allProps = {
    notifyCount, setNotifyCount, products, setProducts, toggle, setToggle
  }

  return (
    <>
      <Header notifyP = {allProps} />
      <Mainbody allProps = {allProps} />
      <Footer />
    </>
  )
}

export default App