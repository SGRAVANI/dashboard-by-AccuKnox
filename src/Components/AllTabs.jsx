import React from 'react'
import { useSelector } from 'react-redux'

function AllTabs({setCategoryIndex}) {
    let catState=useSelector((state)=>state.widget.categories)

function generateTabButtons()
{
let list=catState.map((ele,index)=>{return <button className='tab-btn'
    autoFocus={index==0?true:false}
    
    key={`tab-${index}`}    
    onClick={()=>{
    setCategoryIndex(index)
    console.log("index from button is : ",index)
}}   >{ele.category}</button>
})
return list

}
    return (
    <div className='tab-container'>

   {generateTabButtons()}
    </div>
  )
}

export default AllTabs