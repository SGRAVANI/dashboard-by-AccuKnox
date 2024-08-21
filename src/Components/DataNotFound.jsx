import React from 'react'
import "./style.css"
import notFound from "../assets/data-not-found.jpg"
function DataNotFound() {
  return (
    <div className='data-not-found-container'>
        
        
        <div style={{width:"100%",height:"100%",overflow:"hidden"}}>        
            <h3 style={{position:"relative",top:"3rem"}}>{`Sorry, No result found :)`}</h3>
            <img src={notFound} alt="search-data-not-found" />
        </div>

        </div>
  )
}

export default DataNotFound