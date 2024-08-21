import React from 'react'
import { useSelector } from 'react-redux'
import CategoryGrid from './CategoryGrid'
import Card from './Card'
import DataNotFound from './DataNotFound'
//import { searchByInput } from '../Slices/searchSlide'
function AllCategories() {
  let categoriesState=useSelector((state)=>{
    
    if(state.widget.categories)
    {
    return state.widget.categories
    }
    // else{
    //   return state.widget
    // }
    })
    let searchData=useSelector((state)=>state.search)
//  console.log(categoriesState,"from all categories")
  function generateGrid()
  {
    let list=categoriesState.map((ele,index)=>{
      // let f=0
      // for(let w of ele.widgets)
      // {
      //   if(w.active)
      //   {
      //     f=1;
      //     break;
      //   }
      // }
     
      return  <>
      <h6 key={`heading-for-${ele.category}`}>{ele.name}</h6>
      <CategoryGrid category={ele.category} widgets={ele.widgets} index={index} key={`${ele.category}-${index*100}`}/>
      </>
      
    })
  
    return list
  }
  function generateSearchResult()
  {
    let list=searchData.result.map((ele,index)=>{
      return <Card widgetData={ele} key={ele.id} widgetIndex={ele.widgetIndex} categoryIndex={ele.categoryIndex}  />
      
    })
    return list
  }
  return  ((searchData.text!=''&&searchData.result.length>0)?<div className='category-container'>{generateSearchResult()}</div>:(searchData.text!='' && searchData.result.length==0)?<div className='category-container'>
  <DataNotFound/>
   </div>  : <div className='all-category-container' key='category-container'>
     {generateGrid()}
    </div>
   
  ) 
    
    
    
}

export default AllCategories


