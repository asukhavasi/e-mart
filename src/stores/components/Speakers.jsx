import React from 'react'

import { speakerData } from '../data/speaker'
import { Link } from 'react-router-dom'

const Speakers = () => {
    const firstFiveProducts = speakerData.slice(0,5)
  return (
    <>
    <div className="proTitle">
        <h2>Speakers</h2>
    </div>
    
    <div className="productsSection">
        {
            firstFiveProducts.map((item)=>{
                return(
                    <div className='imageBox'>
                    <Link to={`/speakers/${item.id}`}>
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

export default Speakers