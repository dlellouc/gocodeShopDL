import React from 'react'
import './Products.css'
import {productsArr} from '../../data/data.js'
import Product from '../Product/Product'
import { allProductsCategoryString } from '../FilterBy/FilterBy'

const Products = ({productType}) => {
  let filteredProductsArr = productType === allProductsCategoryString
    ? productsArr
    : productsArr.filter((item) => item.category === productType);

  return (
    <section className='products'>
      {filteredProductsArr.map((item) => 
        <Product key={item.id} productName={item.title} productImgSrc={item.image} productPrice={item.price} />)}
    </section>
  )
}

export default Products