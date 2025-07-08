import React, { useState } from 'react'

import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const ComputerPage = () => {

    const [selectedComputer,setSelectedComputer] = useState([])

    const companyHandler = (selection)=>{
        if(selectedComputer.includes(selection)){
            setSelectedComputer(selectedComputer.filter(item => item !== selection))
        }else{
            setSelectedComputer([...selectedComputer,selection])
        }
    }

    const filteredSelection = selectedComputer.length === 0 ? 
    computerData :
    computerData.filter((select)=>selectedComputer.includes(select.company))

  return (
    <>  
    <Navbar/>

    <div className="product-page">
        <div className="pro-selected">
        {
            [...new Set(computerData.map(phone=>phone.company))].sort().map((company)=>{
                return(
                    <div className='pro-input'>
                        <label>
                            <input type="checkbox" 
                            checked={selectedComputer.includes(company)}                    
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
            filteredSelection.map((item)=>{
                return(
                    <div>
                        <Link to={`/computers/${item.id}`}>
                            <div className="pageImg">
                                <img src={item.image} alt="" />
                            </div>
                        </Link>
                        <div className="proModel">
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

export default ComputerPage