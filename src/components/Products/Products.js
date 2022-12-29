import React from 'react'
import './Products.css'
import {productsArr} from '../../data/data.js'
import Product from '../Product/Product'

const Products = ({productType}) => {
  let filteredProductsArr = !productType && productType.length !== 0
    ? productsArr.filter((item) => item.category === productType) 
    : productsArr;

  return (
    <section className='products'>
      {filteredProductsArr.map((item) => 
        <Product key={item.id} productName={item.title} productImgSrc={item.image} productPrice={item.price} />)}
    </section>
  )
}

export default Products