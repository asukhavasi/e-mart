import React, { useState } from 'react'

import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const WatchesPage = () => {

    const[watchSelected,setWatchSelected] = useState([])

    const companyHandler = (selection)=>{
        if(watchSelected.includes(selection)){
            setWatchSelected(watchSelected.filter(item => item !== selection))
        }else{
            setWatchSelected([...watchSelected,selection])
        }
    }

    const filterData = watchSelected.length === 0?
    watchData:
    watchData.filter((select)=>watchSelected.includes(select.brand))

  return (
    
    <>
    <Navbar />

    <div className="product-page">
            <div className="pro-selected">
        {
            [...new Set(watchData.map(product=>product.brand))].sort().map((company)=>{
                return(

                    <div className='pro-input'>

                        <label >
                            <input type="checkbox" 
                            checked={watchSelected.includes(company)}
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
        filterData.map((item)=>{
            return(
                <div>
                    <Link to={`/watches/${item.id}`}>
                        <div className="pageBox">
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

export default WatchesPage