import React from 'react'
import './Products.css'
import Product from '../Product/Product'
import {useContext} from 'react';
import MyContext from '../../MyContext';

const Products = () => {
  const { products } = useContext(MyContext);

  return (
    <section className='products'>
      {products.map((item) => 
        <Product key={item.id} productId={item.id} productTitle={item.title} productImgSrc={item.image} productPrice={item.price} />)}
    </section>
  )
}

export default Products