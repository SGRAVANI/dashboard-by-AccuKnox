import React, { useState } from 'react'
import NewWidgetDialogue from './NewWidgetDialogue'
import "./style.css"
function AddWidgetCard({category,index}) {
    let [dialogue,openDialogue]=useState(false)
    function handleAddWidget()
    {
        //console.log(category,index)
        openDialogue(true)
    }
    function closeDialogue()
    {
        openDialogue(false)
    }
  return (
    <>
    <div className='card-container'>
    <div className='card-body'>
    
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",minHeight:"250px"}}>
        <button onClick={handleAddWidget} className='btn' >+ Add Widget</button>
        </div>
    </div>

    </div>
    {dialogue &&<NewWidgetDialogue category={category} index={index} closeDialogue={closeDialogue}/>}
    </>
  )
}

export default AddWidgetCard