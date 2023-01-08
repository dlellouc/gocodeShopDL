import React from 'react'
import './Products.css'
import Product from '../Product/Product'
import { allProductsCategoryString } from '../../App'

const Products = ({productsArr, currentCategory}) => {
  let filteredProductsArr = currentCategory === allProductsCategoryString
    ? productsArr
    : productsArr.filter((item) => item.category === currentCategory);

  return (
    <section className='products'>
      {filteredProductsArr.map((item) => 
        <Product key={item.id} productName={item.title} productImgSrc={item.image} productPrice={item.price} />)}
    </section>
  )
}

export default Products