// import React from 'react';
// import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement);

// const data = {
//   labels: ['Total'],
//   datasets: [
//     {
//       label: 'JavaScript',
//       data: [66.1],
//       backgroundColor: 'yellow',
//     },
//     {
//       label: 'CSS',
//       data: [18.3],
//       backgroundColor: 'purple',
//     },
//     {
//       label: 'PHP',
//       data: [8.1],
//       backgroundColor: 'blue',
//     },
//     {
//       label: 'HTML',
//       data: [7.5],
//       backgroundColor: 'red',
//     },
//   ],
// };

// const options = {
//   indexAxis: 'y', // Set indexAxis to 'y' for horizontal bars
//   plugins: {
//     legend: {
//       display: false, // Hide legend
//     },
//   },
// };

// function HorizontalBarChart() {
//   return <Bar data={data} options={options} />;
// }

// export default HorizontalBarChart
import { TouchApp } from '@mui/icons-material';
import React, { useEffect } from 'react';



const HorizontalBarChart = ({wdata}) => {
 let data=[]
  for(let key in wdata)
  {
   data.push({label:key,value:wdata[key]})
  }
    // const data = [
    //     { label: "Critical", value: 5,color:"red" },
    //     { label: "Low", value: 25,color:"green" },
    //     { label: "Medium", value: 105,color:"blue" },
    //     { label: "High", value: 108,color:"yellow" },
    //   ];    
    let total =data.reduce((sum,ele,index)=>sum+ele.value,0)

   // console.log(data)
   function generateBars()
   {
    
    let list=data.map((ele,index)=>{
      let boxWidth=(ele.value*100)/total;
      let id=Math.random()*2000
      return <div key={`bar-${id}`}  style={{width:`${boxWidth}%`,height:"100%",backgroundColor:getLegendColor(ele.label),border:`1px solid ${getLegendColor(ele.label)}`,borderTopLeftRadius:(index==0)?"8px":"0", 
      borderBottomLeftRadius:(index==0)?"8px":"0",
      borderBottomRightRadius:(index==data.length-1)?"8px":"0"  ,
      borderTopRightRadius:(index==data.length-1)?"8px":"0"  
  }
    }> </div> 
    })
    return list
   }
   function getLegendColor(label)
   {
   if(label=="Critical")
   {
    return "#800000"
   }
   if(label=='High')
   {
   return "red"
   }
   if(label=="Warning")
   {
    return "yellow";
   }

  //  "Critical":9,
  //  "High":150,
  //  "Medium":300,
  //  "Warning":170,
  //  "Low":50
   if(label=="Medium")
   {
   return "orange"
   }
   if(label=="Low")
   {
    return "#C0C0C0"
   }
   
   }
   function generateLegends()
   {
    
    let list=data.map((ele,index)=>{
      
      let id=Math.random()*2000
      return <div key={`bar-${id}`} style={{display:"flex",alignItems:"center",justifyContent:"start",gap:"0.8rem",width:"49%"}}  >
        <div style={{width:"15px",height:"15px",backgroundColor:getLegendColor(ele.label),border:`1px solid ${getLegendColor(ele.label)}`, borderRadius:"3px"  
  }
    }></div>
     <p>{ele.label} ({ele.value})</p>
        
         </div> 
    })
    return list
   }
  return (
  <div className='horizaontalbar-container'>
    <div><span style={{fontWeight:"bold"}}>{total} </span>Total Vulnerabilities</div>
    <div className='bar'>
    {generateBars()}
    </div>
    <div className='legend'>
     {generateLegends()}
    </div>
  </div>
  );
};

export default HorizontalBarChart;