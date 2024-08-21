import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import DashboardHeader from './Components/DashboardHeader'
import Card from './Components/Card'
 import CategoryGrid from './Components/CategoryGrid'
import AllCategories from './Components/AllCategories'
import NewWidgetDialogue from './Components/NewWidgetDialogue'
import PieChartWithCenterLabel from './Components/PieChart1.jsx'
import HorizontalBarChart from './Components/HorizontalBarChart.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
     <Header/>
     <div id="main">
      <DashboardHeader/>
      <AllCategories/>
      {/* <PieChartWithCenterLabel/> */}
     
     </div>
    </div>
  )
}

export default App
