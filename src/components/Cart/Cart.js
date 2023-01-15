import React, { useContext } from 'react'
import MyContext from '../../MyContext'

const Cart = () => {
    const { cart } = useContext(MyContext);

    // let totalPrice = cart.length !== 0 ? cart.reduce((partialSum, item) => (partialSum+item.price, 0)) : 0;

  return (
    <div className='cart'>
        <h2>My cart</h2>
        <ul>
            {cart.map((item) => 
            <li key={item.id}>{item.id} - {item.title} - {item.amount} - {item.price * item.amount} $</li>)}
        </ul>
        {/* <h2>Total: {totalPrice} $</h2> */}
    </div>
  )
}

export default Cart