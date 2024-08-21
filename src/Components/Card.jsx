import React, { useState } from 'react'
import PieChartWithCenterLabel from './PieChart1'
import  image from "./analytics-icon.png"
import HorizontalBarChart from './HorizontalBarChart'
import { deleteData } from '../Slices/widgetSlice'
import { useDispatch, useSelector } from 'react-redux'

function Card({widgetData,categoryIndex,widgetIndex}) {
    //console.log(widgetData,widgetData.data)
   let [f,setF]=useState(false)
    let dispatch=useDispatch()
    let ip=useSelector((state)=>state.search)
    function handleDelete()
    {
    console.log(categoryIndex,widgetIndex)
    let r=confirm("are you sure you want to delete this widget?")
    if(r)
    {
    dispatch(deleteData({categoryIndex,widgetIndex}))
    }
    }
  return widgetData.active?(<div className='card-container'>
    <div className='card-body' onMouseEnter={()=>{setF(true)}} onMouseLeave={()=>{setF(false)}}>
      {f&&ip.text==''&&<button style={{position:"absolute",top:"0",right:"0"}} className='btn close-btn' onClick={handleDelete}>X</button>}
        <h4>{widgetData.name}</h4>
        {widgetData.type=="No-Data"?<div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",flexDirection:"column",minHeight:"220px",width:"100%"}}>
          <div style={{width:"100%",textAlign:"center"}}>
          <img src={image} alt="analytics-icon" width="120" height="75" style={{opacity:0.3}}/>
            <p>No Graph Data Available</p>
            </div>
        </div>:""}
        {widgetData.text?<div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem",flexDirection:"column",width:"100%",height:"200px"}}>
            <p>{widgetData.text}</p>
        </div>:""}
        {widgetData.type=="pieChart"?
            <PieChartWithCenterLabel wdata={widgetData.data} />:""}
        {widgetData.type=="bar-chart"?
            <HorizontalBarChart wdata={widgetData.data} />:""}
        
    </div>

    </div>):""
  
}

export default Card