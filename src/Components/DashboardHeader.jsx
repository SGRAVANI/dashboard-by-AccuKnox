import React, { useState } from 'react'
import "./style.css"
import CachedIcon from '@mui/icons-material/Cached';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import EnableDisableWidget from './EnableDisableWidget';
function DashboardHeader() {
  let [f,setF]=useState(false)
  function closeEnableDisable()
  {
   setF(false)
  }
  return (
    <>
        <div className='dashboardHeader'>

     <h5>CNAPP Dashboard</h5>
     <div className='dashboardHeaderRight'>
        <button className='btn' onClick={()=>setF(true)}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem"}}>
          <p>Add Widget </p>
          <AddIcon />
          </div></button>
        <button className='btn' onClick={()=>{
          window.location.reload()
        }}><CachedIcon/></button>
        <button className='btn'><MoreVertIcon /></button>
        <button className='btn'><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem"}}>
        <WatchLaterIcon style={{color:"navy"}} />
          <select name="days" style={{borderRight:"none",borderBottom:"none",borderTop:"none",borderLeft:"2px solid navy", color:"navy", borderColor:"navy",paddingLeft:"0.2rem",fontWeight:"bold"}} className='select-style'>
         
           <option value="2">Last 2 days</option>
           <option value="5">Last 5 days</option>
           <option value="10">Last 10 days</option>
          </select>
          </div></button>
     </div>
    </div>
    {f&&<EnableDisableWidget closeEnableDisable={closeEnableDisable}/>}
    </>
  )
}

export default DashboardHeader