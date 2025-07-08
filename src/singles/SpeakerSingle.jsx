import React from 'react'
import { useParams } from 'react-router-dom'
import { speakerData } from '../stores/data/speaker'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartCOntext'



const SpeakerSingle = () => {

    const {id} = useParams()

    const product = speakerData.find(pro=>pro.id === id)

    const {addToCart} = useCart()

  return (
    <>
    <Navbar/>
    <div className='ind-section'>
        <div className="ind-image">
            <img src={product.image} alt="" />
        </div>
        <div className="ind-details">
            <div className="space">
                <h2>{product.brand}</h2>
            </div>
            <div className="space">
                <h3>{product.model}</h3>
            </div>
            <div className="space">
                <h3>{product.price}</h3>
            </div>
            <div className="space">
                <p>{product.description}</p>
            </div>
            <button className="space ind-btn" onClick={()=>addToCart(product)}> Add to Cart</button>

        </div>
        
    </div> 
    
    </>
  )
}

export default SpeakerSingle