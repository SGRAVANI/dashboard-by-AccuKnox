import { createSlice } from "@reduxjs/toolkit";
import customData from "../assets/data.json" assert {type:"json"}
import AllCategories from "../Components/AllCategories";
import { act } from "react";

console.log(customData)
let widgetSlice=createSlice({
    name:"widget",
    initialState:{
   "categories":customData.categories
    },
    reducers:{
        add:(state,action)=>{
        //console.log(state,action,action.payload)
        // console.log(state.categories[0].widgets,"from slice")
        console.log(action.payload)
        state.categories[action.payload.index].widgets.push(action.payload.newWidget)
        return state;
        },
        deleteData:(state,action)=>{
          let cI=action.payload.categoryIndex
          let wI=action.payload.widgetIndex
          let r={categories:[]}
          
          for(let i=0;i<state.categories.length;i++)
          {
            if(i!=cI)
            {
                r.categories.push(state.categories[i])
            }
            else{
                let filteredWidgetData=state.categories[cI].widgets.filter((ele,ind)=>{
                    if(ind!=wI)
                    {
                        return true
                    }
                })
                let updatedOb={...state.categories[cI],widgets:filteredWidgetData}
                r.categories.push(updatedOb)
            }
          }
                // let newState=state.categories.filter((ele,index)=>{
                //    if(index==action.payload.categoryIndex)
                //    {
                //        if(state.categories[action.payload.categoryIndex].widgets.length>0)
                //        {
                //           if( state.categories[action.payload.categoryIndex].widgets[action.payload.widgetIndex])
                //           {
                //            return false
                //           }
                //           else{
                //            return true
                //           }
                //        }
                       
                //    }
                //    else{
                //        return true
                //    }
                   
                // })
                // console.log(newState)
                // return newState
               return r;
        }
       ,
       reset:(state,action)=>{
        //    console.log(state,"from reset")
            return state;
       },
        enableDisable:(state,action)=>{
           state.categories=action.payload.updatedState;
            return state
        },
    //     enable:(state,action)=>{

    //     },
        search:(state,action)=>{
            let r=[]
            if(action.payload.text.trim()!='')
            {

         for(let i=0;i<customData.categories.length;i++)
         {
            for(let ele of customData.categories[i].widgets)
            {
                if(ele.name.toLowerCase().includes(action.payload.text.toLowerCase()))
                {
                r.push(ele)
                }
            }
         }
         return r
       // console.log(r)
        }
        else{
            state={ "categories":customData.categories}
            return state;
        }
         
         //return r;
        // 
        }

    }
  


})
export default widgetSlice.reducer;
export const {add,enableDisable,deleteData,search,reset}=widgetSlice.actions