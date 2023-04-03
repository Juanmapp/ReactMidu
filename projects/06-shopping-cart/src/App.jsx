// MINUTO 1:00:00
import {products as initicalProducts} from './mocks/products.json'
import { Products } from "./components/Products.jsx"
import { Header } from "./components/Header.jsx"

import { useState } from 'react'


function App() {
  const [products] = useState(initicalProducts)
  const [filters, setFilters] = useState({
    category: "all",
    minPrice : 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        filters.category === "all" ||
        filters.category === product.category
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
    <Header changeFilters={setFilters} />
    <Products products={filteredProducts}/>
    </>
  
  )
}

export default App
