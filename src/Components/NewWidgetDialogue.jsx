import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Slices/widgetSlice.js'


function NewWidgetDialogue({category,index,closeDialogue}) {
    //console.log(category,index)

    let [ip,setIp]=useState({name:"",text:""})
    let [f,setF]=useState(false)
    let [error,setError]=useState(false)
    let categoryWidgetState=useSelector((state)=>state.widget.categories[index].widgets)
    let data=useSelector((state)=>state.widget)
 
 
    let dispatch=useDispatch()
         
    function search(text)
    {
        let r=[]
        if(text.trim()!='')
        {
            console.log(data,"data from new dialogue")

             for(let i=0;i<data.categories.length;i++)
                {
                    for(let ele of data.categories[i].widgets)
                    {   console.log(ele.name.toLowerCase(),text.toLowerCase())
                        if((ele.name.toLowerCase())==(text.toLowerCase()))
                        {
                            r.push(ele)
                         }
                    }
                }
                console.log(r,"data from search in new dialogue")
         return r
   // console.log(r)
        }
        else{
        return [];
        }
     
     //return r;
    // 
    }
     
    function handleAdd(e)
    { e.preventDefault()
        setError(false)
        if(ip.name==""||ip.text=="")
        {
            return
        }
        let result=search(ip.name)
        if(result.length==0)
        {
        let id=`${category}-${categoryWidgetState.length+1}`
        console.log(id)
        let name=ip.name;
        let text=ip.text
       
        let newWidget={
            id,
            name,
            text,
            data:{},
            active:true,
        }
       let payload={
        category,
        index,
        newWidget
       }
       dispatch(add(payload))
       setF(true)
       setTimeout(()=>{
        setF(false)
        closeDialogue()
       },[1000])
       // let newWidget
    }
    else{
        setError(true)
       setTimeout(()=>{
        setError(false)
       //closeDialogue()
      },[1500])
    }
    }
    function handleChange(e)
    {
        setIp((prev)=>{return {
            ...prev,[e.target.name]:e.target.value
        }})

    }
  return (
    <div style={{position:"fixed",height:"100vh",width:"100%",backgroundColor:"rgba(230,230,230,0.5)",top:"0",left:"0",zIndex:"1"}}>
    <div className='newWidget'>
        <div className='new-widget-container'>    
    <header className='new-widget-header'>Add Widget</header>
    <div className='new-widget-body'>
    <section><h4>caregory:{category}</h4></section>
    <form onSubmit={handleAdd}>
    <div>
     <input type="text" placeholder='enter widget Name' name="name" value={ip.name} required  onChange={handleChange} className='dialogue-box-input'/> 
     </div>
     <div>
     <input type="text" placeholder='enter widget text' name="text" value={ip.text} required onChange={handleChange} className='dialogue-box-input'/>
     </div>
    <div style={{display:"flex",gap:"1rem",alignItems:"center",justifyContent:"center",marginTop:"2rem"}}> <button type='submit' className='submit-btn'>Add Widget</button>
     <button onClick={()=>{
        closeDialogue();
        setError(false)
        setF(false)
     }} className={`btn cancel-btn`} >Cancel</button>
     </div>
     </form>
     </div>
    {f&& <p style={{fontWeight:"400",color:"green",maxWidth:"200px"}}>widget added successfully!!!</p>}
    {error&& <p style={{fontWeight:"400",color:"red",maxWidth:"200px"}}>widget name already exists, please choose another name!!!</p>}
    </div>
        </div>
        </div>
  )
}

export default NewWidgetDialogue