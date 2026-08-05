import React from 'react'

const DisplayProducts = ({ products }) => {
  return (
    <div>
      {products.map(product => {
        return (
          <article>
            <h1>Product Name{product.name}</h1>
            <p>Product Price{product.price}</p>
            <hr />
          </article>
        )
      })}
    </div>
  )
}

export default DisplayProducts
