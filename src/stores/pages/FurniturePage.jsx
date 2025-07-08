import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const FurniturePage = () => {

  const [furniture, setFurniture] = useState([])

  const companyHandler = (selection)=>{
    if(furniture.includes(selection)){
      setFurniture(furniture.filter(item => item !== selection))
    }else{
      setFurniture([...furniture, selection])
    }
  }

  const filteredData = furniture.length === 0?
   furnitureData :
   furnitureData.filter((select)=>furniture.includes(select.brand))

  return (
    <>
    <Navbar />

    <div className="product-page">
      <div className="pro-selected">
        {
          [...new Set(furnitureData.map(product=>product.brand))].sort().map((company)=>{
            return(
              <div className='pro-input'>
                <label>
                  <input type='checkbox' 
                  checked={furniture.includes(company)}
                  onChange={()=>companyHandler(company)}
                  />
                  {company}
                </label>
              </div>
            )
          })
        }
      </div>

      <div className="pageSection">
        {
          filteredData.map((item)=>{
            return(
              <div>
                <Link to={`/furniture/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt="" />

                  </div>
                </Link>
                <div className="proModel">

                  {item.brand},{item.model}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default FurniturePage