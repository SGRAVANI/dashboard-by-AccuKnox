import React, { useState } from 'react'
import "./style.css"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../Slices/widgetSlice';
import { searchByInput } from '../Slices/searchSlide';
import {  resetSearch } from '../Slices/searchSlide';
function Header() {
  //let [searchText,setSearchText]=useState('')
  let dispatch=useDispatch()
  let [timer,setTimer]=useState(null)
  let categoryState=useSelector((state)=>state.widget)
  //let seachData=useSelector((state)=>state.search.text)
  let [ip,setIp]=useState('')
  //console.log(categoryState,"from header")
  function handleChange(e)
  {
   //setSearchText(e.target.value);
   setIp(e.target.value)
   clearTimeout(timer)
  let id= setTimeout(()=>{
    //console.log(e.target.value,"input is")
    
    dispatch(searchByInput({text:e.target.value,categoryState})) 
   },[500])
   setTimer(id)
   
  }
  return (
    <div className='header'>
    <div className='headerLeft'>
        <p onClick={()=>{dispatch( resetSearch());
        setIp('')
        }}>Home</p>
        <p>&gt;</p>
        <p style={{color:"navy",fontWeight:"600"}}>Dashboard V2</p>
    </div>
    <div className='searchbar-container'>
         <SearchIcon sx={{color:"rgb(169, 223, 241)"}}/>
        <input type="text" placeholder='search anything...' onChange={handleChange} value={ip} />
    </div>
    </div>
  )
}

export default Header