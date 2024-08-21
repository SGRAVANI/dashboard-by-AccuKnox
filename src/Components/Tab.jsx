
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./style.css"
function Tab({categoryindex,getUpdatedWidgetValue}) {
// console.log(categoryindex)
    let catState=useSelector((state)=>state.widget.categories)
    let [localState,setLocalState]=useState(catState)
    function handleChange(isChecked,widgetIndex)
    {
      //console.log(isChecked,widgetIndex,categoryindex)
      // let curState=[...localState]
      // curState[categoryindex].widgets[widgetIndex].active=isChecked
      let curState = [...localState]

      curState[categoryindex]={...curState[categoryindex],widgets:
      curState[categoryindex].widgets.map((ele,ind)=>{
        if(ind==widgetIndex)
        {
          
          return {...ele,active:isChecked}
        }
        else{
          return {...ele}
        }
      })


      }
    //   curState[categoryindex].widgets[widgetIndex].active=isChecked
      // curState[categoryindex] = {
      //     ...curState[categoryindex],
      //     widgets: curState[categoryindex].widgets.map((widget, idx) => 
      //         idx === widgetIndex ? { ...widget, active: isChecked } : widget
      //     )
      // }
       //console.log(curState)
      setLocalState(curState)
      getUpdatedWidgetValue(curState)
    }
    function generateBody()
    {   //console.log(categoryIndex)

        let list=catState[categoryindex].widgets.map((ele,index)=> 
       { let randomId=Math.floor(Math.random()*2000)
      return   ( <div style={{border:"1px solid gray",
          padding:"0.5rem",
          display:"flex",
          justifyContent:"flex-start",
          gap:"0.5rem",
          alignItems:"center",
          color:"navy",width:"100%"}}
          key={`wrapper-tab-${randomId}`}
           >

        <input type="checkbox" className="checkbox"onChange={(e)=>{
          handleChange(e.target.checked,index)
        }}   key={`${ele.id}-${index}`} checked={localState[categoryindex].widgets[index].active}/> 
          <p key={`label-category-${categoryindex}-${index}`}>{ele.name}</p>
       </div> )}
        )
     //   console.log(list,"from tab")
       // console.log(list)
        return list
    }

    return generateBody()
  
  
}

export default Tab