import React from 'react'
import { Link } from 'react-router-dom'

import { useCart } from '../context/CartCOntext'


const Navbar = () => {

    const {cartItems} = useCart()
  return (
    <>
        <div className="navsection">
        <div className="title">
            <Link to='/'>
                <h2>E-Mart</h2>
            </Link>
        </div>
        <div className="search">
            <input type="text" placeholder='Search....' />
        </div>
        <div className="user">
            <div className="user-details">
                SigIn/SignOut
            </div>
            <Link to='/cart'>
                <div className="cart">
                    Cart 
                    <span className='sp'>
                        {cartItems.length}
                    </span>
                </div>
            </Link>
        </div>
    </div>
    <div className="subMenu">
        <ul>

            <Link to='/mobiles'>
                <li>Mobiles</li>
            </Link>
            <Link to='/computers'>
                <li>Computers</li>
            </Link>
            <Link to = '/speakers'>
                <li>Speakers</li>
            </Link>
            <Link to='/watches'>
                <li>Watches</li>
            </Link>
            <Link to='/furniture'>
                <li>Furniture</li>
            </Link>
            <Link to='/tv'>
                <li>Tv</li>
            </Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar