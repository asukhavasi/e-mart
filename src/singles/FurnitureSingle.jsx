import React from 'react'
import Navbar from '../stores/components/Navbar'
import { useParams } from 'react-router-dom'
import { furnitureData } from '../stores/data/furniture'
import UserCart from '../UserCart'
import { useCart } from '../stores/context/CartCOntext'


const FurnitureSingle = () => {

    const {id} = useParams()

    const product = furnitureData.find(item => item.id === id)
    const {addToCart} = useCart()

  return (
    <>
    <Navbar/>
    <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt="" />

        </div>
        <div className="ind-details space">
            <h2>Company: {product.brand}</h2>
            <div className='space'>
                <h3>Model: {product.model}</h3>
            </div>
            <div className="space">

                <h3>Price: {product.price}</h3>
            </div>
            <div className="space">
                <p>{product.description}</p>
            </div>
            <button className='ind-btn space' onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default FurnitureSingle