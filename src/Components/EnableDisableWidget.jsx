import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch ,useSelector} from 'react-redux';
import AllTabs from './AllTabs';
//import { Tab } from '@mui/material';
import Tab from './Tab';
import { enableDisable } from '../Slices/widgetSlice';

function EnableDisableWidget({closeEnableDisable}) {
  let catState=useSelector((state)=>state.widget.categories)
  let [updatedWidgetList,setUpdatedWidgetList]=useState(catState)
  let [selectedTab,setSelectedTab]=useState(0)
   let [f,setF]=useState(false)
  let dispatch=useDispatch()
  //  console.log(updatedWidgetList)
  function setCategoryIndex(index)
  {
   setSelectedTab(index);
  }
 function handleConfirm()
 {
  setF(true)
 dispatch(enableDisable({updatedState:updatedWidgetList}));
 setTimeout(()=>{
  setF(false)
  closeEnableDisable()
 },[1000])

 }
//   function generateTabData()
//   {
// //    console.log(catState)
//   let list=catState[selectedTab].map((ele,index)=>{return<Tab categoryIndex={selectedTab} />})
  

//   return list
//   }
function getUpdatedWidgetValue(val)
{
  // console.log(val)
   //updatedWidgetList=val;
   setUpdatedWidgetList(val)
}
  return (
    <div className='enable-disable-widget-container'>

    <div className='enable-disable-window'>
      <div className='enable-disable-window-container'></div>
      <header style={{display:"flex",padding:"1rem 1.5rem", justifyContent:"space-between",backgroundColor:"navy",color:"white",fontWeight:"bold"}}> <p>Add Widget</p>
      <CloseIcon onClick={()=>{closeEnableDisable()}}/>
      </header>
      <section className='middle-section-window'>
        <p>Personalise your dashboard by adding the following widget</p>
        <AllTabs setCategoryIndex={setCategoryIndex}/>
        
        {/* {generateTabData()} */}
        <Tab categoryindex={selectedTab} getUpdatedWidgetValue={getUpdatedWidgetValue} />
        {f&&<div style={{position:"fixed",bottom:"6rem",color:"green",fontWeight:"bold",}}>Active widgets updated successfully...</div>}       
      </section>
    
      <div className='footer-btn'>
        <button className='filled-unfilled unfilled-btn' onClick={()=>{
          closeEnableDisable()
        }}>Cancel</button>
        <button className='filled-unfilled filled-btn' onClick={handleConfirm}>Confirm </button>
      </div>
    </div>

    </div>
  )
}

export default EnableDisableWidget