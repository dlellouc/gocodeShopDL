import React from 'react'
import './Products.css'
import Product from '../Product/Product'

const Products = ({products}) => {

  return (
    <section className='products'>
      {products.map((item) => 
        <Product key={item.id} productName={item.title} productImgSrc={item.image} productPrice={item.price} />)}
    </section>
  )
}

export default Products