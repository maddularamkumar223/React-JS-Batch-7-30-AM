import React from 'react'
import DisplayProducts from './DisplayProducts'
import NotFound from '../NotFound'

const Products = () => {
  let products = [
    {
      name: 'Mobile',
      price: 30000
    },
    {
      name: 'Shirt',
      price: 3000
    }
  ]
  return (
    <div>
      {products.length > 0 ? (
        <DisplayProducts products={products}></DisplayProducts>
      ) : (
        <NotFound></NotFound>
      )}
    </div>
  )
}

export default Products
