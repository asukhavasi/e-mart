import React from 'react'
import { useCart } from './stores/context/CartCOntext'
import Navbar from './stores/components/Navbar'



const UserCart = () => {

    const {cartItems,addToCart,removeFromCart} = useCart()

  return (
    <>
    <Navbar/>
    <div className="cart-heading">
                        <h2>Your Cart has {cartItems.length} items</h2>
    </div> 

    <div>
        {
            cartItems.map((item)=>{
                return(
                    
                    <div className="cart-section">
                        
                            <div className="cart-image">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="cart-details space">
                                    <h3 >{item.product}</h3>
                                    <h2 className='space'>{item.price}</h2>
                                    <h3 className='space'>{item.company} {item.brand} {item.model}</h3>
                                    <div className='remove-porduct'>
                                        <button className='space ind-btn' onClick={()=>removeFromCart(item)}>RemoveFromCart</button>
                                    </div>
                            </div>
                        
                    </div>
                    
                )
            })
        }
    </div>
    
    </>
  )
}

export default UserCart