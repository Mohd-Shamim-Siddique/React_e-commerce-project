import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa";
import { decreaseQuantity, increaseQuantity, removeItems } from '../toolkit/slices/cartSlices';


const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart)
  console.log(cartItems);

  const cartTotal = cartItems.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)
  console.log(cartTotal);


  return (
    <div className='container'>
      {cartItems.length === 0 ? '' :
        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>${(cartTotal).toFixed(2)}</h2>}
      <ul className='cartItemContainer container'>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className='cartContainer flex'>
              <div className="category">{item.category}</div>
              <div className='cartDiv flex' style={{ width: '30%' }}>
                <div className="cartImg">
                  <img src={item.image} alt="" />
                </div>
                <div className="cartDetail">
                  <h2 className="cartTitle">${item.title}</h2>
                  <p className=" flex cartRatings">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p >
                </div >
              </div >
              <div className="cartPrice">${(item.price * item.quantity).toFixed(2)}</div>
              <div className="flex cartQuantity">
                <p>Quantity(Pieces): </p>
                <div className='flex buttons'>
                  <button className='increment' disabled={item.quantity >= 50} onClick={() => dispatch(increaseQuantity({ id: item.id }))} >+</button>
                  <p className='cartCount'>{item.quantity}</p>
                  <button className='decrement' disabled={item.quantity <= 0}
                    onClick={() => {
                      if (item.quantity <= 1) {
                        dispatch(removeItems({ id: item.id }))
                      } else {
                        dispatch(decreaseQuantity({ id: item.id }))
                      }
                    }}
                  >-</button>
                </div>
              </div>
              <div className="addToCart">
                <button onClick={() => dispatch(removeItems({ id: item.id }))}>Remove</button>
              </div>
            </div >
          </li >
        ))}
      </ul >
    </div >
  )
}



export default Cart