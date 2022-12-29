import React from 'react'
import './Product.css'

const Product = ({productName, productImgSrc, productPrice}) => {
    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={productImgSrc} />
            </div>
            <div className='product-info'>
                <h5>{productName}</h5>
                <h6>{productPrice}</h6>
            </div>
        </div>
    )
}

export default Product