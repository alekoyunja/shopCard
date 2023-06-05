import { useState } from "react"
import Cart from "./components/Cart"
import Header from "./components/Header"
import Product from "./components/Product"

function App() {

  return (
    <div className="container mx-auto p-4">
     <Header />
      <Product/>
      <Cart />
    </div>
  )
}

export default App
