import React from 'react'

import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'



const Computers = () => {

    const firstFiveProducts = computerData.slice(0,5)

  return (
    <>
    <div className="proTitle">
        <h2>Computers</h2>
    </div>
    
    <div className='productsSection'>{
        firstFiveProducts.map((item)=>{
            return(
                <div className='imageBox'>
                    <Link to={`/computers/${item.id}`}>
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

export default Computers