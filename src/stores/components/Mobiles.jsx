import React from 'react'
import { Link } from 'react-router-dom'
import { mobileData } from '../data/mobiles'

const Mobiles = () => {

    const firstFiveImages = mobileData.slice(0,5)
  return (
    <>
    <div className="proTitle">
        <h2>Mobiles</h2>
    </div>
    
        <div className='productsSection'>
        {
            firstFiveImages.map((item)=>{
                return(
          
                        
                        <div className='imageBox'>
                            <Link to={`/mobiles/${item.id}`}>
                                <img className="proImage" src={item.image} alt="" />
                            </Link>
                        </div>
                        
          
                    
                    
                )
            })
        }
    </div>
    </>
  )
}

export default Mobiles