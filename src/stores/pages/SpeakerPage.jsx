import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { speakerData } from '../data/speaker'
import { Link } from 'react-router-dom'


const SpeakerPage = () => {

    const [speakerSelected, setSpeakerSelected] = useState([])

    const companyHandler = (selection)=>{
        if(speakerSelected.includes(selection)){
            setSpeakerSelected(speakerSelected.filter(item => item !== selection))
        }else{
            setSpeakerSelected([...speakerSelected,selection])
        }
    }

    const filteredSlection = speakerSelected.length === 0?
    speakerData :
    speakerData.filter((select)=>speakerSelected.includes(select.brand))

  return (
    <>
    <Navbar />

    <div className="product-page">
        <div className="pro-selected">
        {
           [...new Set(speakerData.map(speaker=>speaker.brand))].sort().map((company)=>{
                return(
                    <div className='pro-input'>
                        <label >
                            <input type="checkbox" 
                            checked={speakerSelected.includes(company)}
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
                filteredSlection.map((item)=>{
                    return(
                        <div>
                            <Link to={`/speakers/${item.id}`}>
                                <div className="pageBox">
                                    <img src={item.image} alt="" />

                                </div>
                            </Link>
                            <div className='proModel'>
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

export default SpeakerPage