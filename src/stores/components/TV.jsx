import React from 'react'

import { tvData } from '../data/tv'
import { Link } from 'react-router-dom'

const TV = () => {

    const firstFiveProducts = tvData.slice(0,5)

  return (
          <>
    <div className="proTitle">
        <h2>Tv</h2>
    </div>
    <div className="productsSection">
        {
            firstFiveProducts.map((item)=>{
                return(
                    <div className="imageBox">
                    <Link to={`/tv/${item.id}`}>
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

export default TV