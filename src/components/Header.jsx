import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaCartFlatbedSuitcase } from 'react-icons/fa6'
import { useSelector } from 'react-redux';
import TopBanner from './TopBanner';
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../toolkit/slices/userSlice';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartItems = useSelector(state => state.cart)
  const cartCount = Array.isArray(cartItems)
    ? cartItems.reduce((acc, curr) => acc + (curr.quantity || 0), 0)
    : 0;


  const logoutUser = async () => {
    await authService.logOut()
    dispatch(logout())
    navigate('/login')
  }


  return (
    <div>
      <TopBanner />
      <div className='container flex header'>
        <div className="logo flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVl1O8UqMipsTgKeJLy5KfZtLptRjKCh3l9ChGXRJFJFEepVlnaodH0zZOWcZnBQpoes&usqp=CAU"
            alt="" />
        </div>
        <div className='links flex'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/product'>Product</NavLink>
          <NavLink to='/cart' style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}>
            <FaCartFlatbedSuitcase /> {cartCount}
          </NavLink>
          <NavLink onClick={logoutUser}>LogOut</NavLink>
        </div>
      </div>
    </div>
  );
};



export default Header;
