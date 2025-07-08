import React from 'react'

import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const Furniture = () => {

    const firstFiveProducts = furnitureData.slice(0,5)

  return (
      <>
    <div className="proTitle">
        <h2>Furniture</h2>
    </div>
      

    <div className="productsSection">
        {
            firstFiveProducts.map((item)=>{
                return(
                    <div className="imageBox">
                        <Link to={`/furniture/${item.id}`}>
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

export default Furniture