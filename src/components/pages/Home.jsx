import React from 'react'
import Products from './Products'
import Navbar from './Navbar'
import Categories from './Categories'
import BoxexCategory from './BoxexCategory'

const Home = () => {
  return (
    <div>
        
      <Navbar/>
      <Categories/>
      <BoxexCategory/>
      <Products/>
    </div>
  )
}

export default Home
