import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import AllCategories from './AllCategories'
import AddWidgetCard from './AddWidgetCard'
function CategoryGrid({category,widgets,index}) {
  //console.log(widgets)
    //let state=useSelector((state)=>state.widget.categories)
   // console.log(state)
    function generateCategoryCards()
    {
      let list=widgets.map((ele,ind)=>{
        return <Card widgetData={ele}  categoryIndex={index} widgetIndex={ind} key={`generate-card-${ind}`}/>
        
        
      })
      return list;
    }
  return (
    <div className='category-container'>
    
     
     {generateCategoryCards()}
     <AddWidgetCard category={category} index={index} key={`add-widget-${index}`} />
    </div>
  )
}

export default CategoryGrid;