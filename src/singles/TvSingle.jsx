import React from 'react'
import Navbar from '../stores/components/Navbar'
import { tvData } from '../stores/data/tv'
import { useParams } from 'react-router-dom'
import UserCart from '../UserCart'
import { useCart } from '../stores/context/CartCOntext'

const TvSingle = () => {
  
    const {id} = useParams()
    const product = tvData.find(item => item.id === id)
    const {addToCart} = useCart()
    console.log(product)

    return (
    <>
    <Navbar/>
    <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt="" />
        </div>
        <div className="ind-details">
            <div className="space">
                <h2>Company: {product.brand}</h2>
            </div>
            <div className="space">
                <h3>Model: {product.model}</h3>
            </div>
            <div className="space">
                <h3>Price: {product.price}</h3>
            </div>
            <div className="space">
                <p>{product.description}</p>
            </div>
            <button className='space ind-btn' onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    </div>
        {/* <div>TvSingle</div> */}
    </>
  )
}

export default TvSingle