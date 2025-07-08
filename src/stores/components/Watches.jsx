import React from 'react'
import { Link } from 'react-router-dom'
import { watchData } from '../data/watch'

const Watches = () => {

    const firstFiveProducts = watchData.slice(0,5)

  return (
    <>
        <div className="proTitle">
        <h2>Watches</h2>
    </div>
    
    
    <div className="productsSection">
        {
            firstFiveProducts.map((item)=>{
                return(
                    <div className="imageBox">
                    <Link to={`/watches/${item.id}`}>
                        <img className='proImage' src={item.image} alt="" />
                    </Link>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Watches