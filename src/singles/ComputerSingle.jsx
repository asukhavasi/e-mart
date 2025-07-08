import React from 'react'
import Navbar from '../stores/components/Navbar'
import { useParams } from 'react-router-dom'
import { computerData } from '../stores/data/computers'
import { useCart } from '../stores/context/CartCOntext'

const ComputerSingle = () => {

    const {id} = useParams()

    const product = computerData.find(pro=>pro.id === id)
    
    const {addToCart} = useCart()

  return (

    <>
    <Navbar/>
    
    

    
    <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt="" />
        </div>
        <div className="ind-details space">
            <h2>{product.company}</h2>
            <h3 className='space'>{product.model}</h3>
            <h3 className='space'>{product.price}</h3>
            <p className='space'>{product.description}</p>
            <button className='ind-btn space' onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>

    </div>
    


    </>
  )
}

export default ComputerSingle