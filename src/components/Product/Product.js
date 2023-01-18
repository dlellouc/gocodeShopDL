import React from 'react'
import './Product.css'
import {useContext} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';

const Product = ({productId, productTitle, productImgSrc, productPrice}) => {
    const { addToCart, removeFromCart, getAmountInCart } = useContext(CartContext);
    const productAmountInCart = getAmountInCart(productId);

    return (
        <div className='product-card'>
            <div className='product-image'>
                <Link to={"/products/" + productId}>
                    <img src={productImgSrc} />
                </Link>
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