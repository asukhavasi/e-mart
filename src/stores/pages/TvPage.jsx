import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { tvData } from '../data/tv'


const TvPage = () => {

    const [selectedTv,setSelectedTv] = useState([])

    const companyHandler = (selection)=>{
        if(selectedTv.includes(selection)){
            setSelectedTv(selectedTv.filter(item => item !== selection))
        }else{
            setSelectedTv([...selectedTv,selection])

        }
    }

    const filteredData = selectedTv.length === 0?
    tvData :
    tvData.filter(select=>selectedTv.includes(select.brand))

  return (
    <>
    <Navbar />

    <div className="product-page">
        <div className="pro-selected">
            {
                [...new Set(tvData.map(product=>product.brand))].sort().map((company)=>{
                    return(

                        <div className='pro-input'>
                            <label >
                                <input type="checkbox" 
                                checked={selectedTv.includes(company)}
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
                        <Link to={`/tv/${item.id}`}>
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

export default TvPage