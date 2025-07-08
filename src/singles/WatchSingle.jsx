import React from 'react'
import Navbar from '../stores/components/Navbar'
import { watchData } from '../stores/data/watch'
import { useParams } from 'react-router-dom'
import { useCart } from '../stores/context/CartCOntext'

const WatchSingle = () => {

    const {id} = useParams()

    const product = watchData.find(item=>item.id === id)

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
            <div className="space">
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
    {/* <div>WatchSingle</div> */}

    </>
  )
}

export default WatchSingle