import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems } from '../toolkit/slices/ProductSlice'
import { FaStar } from "react-icons/fa";
import { addItems } from '../toolkit/slices/cartSlices';
import { handleUpdateQty } from './QtyIncreDecre';

const Product = () => {
  const [quantities, setQuantities] = useState({})
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [])

  const handleAddToCart = (item) => {
    let quantity = quantities[item.id] || 0;
    if (quantity > 0) {
      dispatch(addItems({ item, quantity, id: item.id }));
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 1000);
    } else {
      alert('Please select quantity before adding to cart.')
    }
  };

  if (isLoading) return <p style={{
    textAlign: 'center', fontWeight: 'bolder', marginBlock: '20px',
    fontSize: '30px'
  }}>Loading...</p>
  
  if (isError) return <p style={{
    textAlign: 'center', fontWeight: 'bolder', marginBlock: '20px',
    fontSize: '30px'
  }}>
    something went wrong!</p>


  return (
    <div>
      <ul className='cartProductContainer container'>
        {data?.map((item) => (
          <li key={item.id}>
            <div className='productsContain'>
              <div className="category">{item.category}</div>
              <div className="cartProductImg">
                <img src={item.image} alt="" />
              </div>
              <div className="cartProductsDetails">
                <h2 className="cartTitle">{item.title}</h2>
                <p className=" flex cartRatings">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
              <div className="cartPrice">${item.price}</div>
              <div className="cartStocks">Total Stocks Available: {item.rating.count}</div>
              <div className="flex cartQuantity">
                <p>Quantity(Pieces): </p>
                <div className='flex buttons'>
                  <button className='increment' disabled={(quantities[item.id] || 0) >= 50} onClick={() => handleUpdateQty(item.id, 1, setQuantities)}>+</button>
                  <p className='cartCount'>{quantities[item.id] || 0}</p>
                  <button className='decrement' disabled={(quantities[item.id || 0]) <= 0} onClick={() => handleUpdateQty(item.id, -1)}>-</button>
                </div>
              </div>
              <div className="addToCart">
                <button onClick={() => (handleAddToCart(item))}>Add To Cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {showMessage && <p className="itemAdded">✅ Item added to cart!</p>}
    </div>
  )
}

export default Product