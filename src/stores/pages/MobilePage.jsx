import React from 'react'
import Navbar from '../components/Navbar'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const MobilePage = () => {

    const [selectedProduct,setSelectedProduct] = useState([])

    const companyHandler = (selection)=>{
        if(selectedProduct.includes(selection)){
            setSelectedProduct(selectedProduct.filter(item => item !== selection))
        }else {
            setSelectedProduct([...selectedProduct,selection])
        }
        
    }

    const filteredSelection = selectedProduct.length===0? 
    mobileData : 
    mobileData.filter((select)=>selectedProduct.includes(select.company))


  return (

    <>
    <Navbar />
    <div className="product-page">
        <div className="pro-selected">
        {
           [...new Set(mobileData.map(phone => phone.company))].sort().map((company)=>{
                return(
                    <div className='pro-input'>
                        <label >
                            <input type="checkbox" 
                             checked={selectedProduct.includes(company)}
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
                  filteredSelection.map((item) => {
                      return (
                          <div>
                              <Link to={`/mobiles/${item.id}`}>
                                  <div className='pageImg'>
                                      <img src={item.image} alt="" />
                                  </div>
                              </Link>
                              <div className='proModel'>
                                  {item.company},{item.model}
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

export default MobilePage