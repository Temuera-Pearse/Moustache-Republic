import React from 'react'
import Header from '../components/Header'
import TShirtPic from '../components/TShirtPic'
import Description from '../components/Description'
import AddToCartButton from '../components/Buttons/AddToCart'
import Sizes from '../components/Buttons/Sizes'

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <TShirtPic />
      <Description />
      <Sizes />
      <AddToCartButton />
    </div>
  )
}

export default Home
