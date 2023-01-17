import React from 'react'
import './Product.css'
import {useContext} from 'react';
import MyContext from '../../MyContext';

const Product = ({productId, productTitle, productImgSrc, productPrice}) => {
    const { addToCart, removeFromCart, getAmountInCart } = useContext(MyContext);
    const productAmountInCart = getAmountInCart(productId);

    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={productImgSrc} />
            </div>
            <div className='product-info'>
                <h5>{productTitle}</h5>
                <h6>{productPrice} $</h6>
                <div style={{display:'inline-flex'}}>
                    <button onClick={() => removeFromCart(productId)} disabled={productAmountInCart === 0}>-</button>
                    <h5 style={{padding:'5px'}}>{productAmountInCart}</h5>
                    <button onClick={() => addToCart(productId, productTitle, productPrice, productImgSrc)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Product