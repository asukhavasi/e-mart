import React from 'react'

import { mobileData } from '../stores/data/mobiles'
import Navbar from '../stores/components/Navbar'
import { useParams } from 'react-router-dom'


import UserCart from '../UserCart'
import { useCart } from '../stores/context/CartCOntext'



const MobileSingle = () => {

    const {id} = useParams()
    
    const product = mobileData.find((item)=>item.id === id)

    const {addToCart,cartItems} = useCart()

    console.log(id)
  return (
    <>
    <Navbar/>
    <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt="" />
        </div>
        <div className="ind-details">
            <div className="ind-company space">
                <h2>Company:{product.company}</h2>
            </div>
            <div className="ind-model space">
                <h3>Model:{product.model}</h3>
            </div>
            <div className="ind-price space">
                <h3>Price:{product.price}</h3>
            </div>
            <div className="ind-desc space">
                <p>{product.description}</p>
            </div>
            <button onClick={()=>addToCart(product)} className='ind-btn space'>Add to Cart</button>
        </div>
    </div>
    
    </>
  )
}

export default MobileSingle