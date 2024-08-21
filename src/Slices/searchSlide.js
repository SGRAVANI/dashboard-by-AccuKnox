import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json" assert {type:"json"}
import { act } from "react";
let searchSlice=createSlice({
    name:"searchSlice",
    initialState:{"result":[],text:""},
    reducers:{
      searchByInput:(state,action)=>{
        state.result=[]
        let ipName=action.payload.text;
        state.text=ipName
        let data=action.payload.categoryState;
        if(ipName.trim()!='')
            {

         for(let i=0;i<data.categories.length;i++)
         {
            for(let j=0;j<data.categories[i].widgets.length;j++)

            // for(let ele of data.categories[i].widgets)
            {
                let ele=data.categories[i].widgets[j]
                if(ele.name.toLowerCase().includes(ipName.toLowerCase()))
                {
                state.result.push({...ele,widgetIndex:j,categoryIndex:i})
                }
            }
         }
         console.log(state.result)
         return state
       // console.log(r)
        }
        else{
            state.result=data;
            state.text=''
            return state;
        }
      },
      resetSearch:(state,action)=>{
        state.result=[]
        state.text=''
        console.log(state)
        return state;
    }
  
    }
   
})
export default searchSlice.reducer;
export const{searchByInput, resetSearch}=searchSlice.actions;