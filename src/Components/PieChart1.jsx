import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const size = {
  width: 360,
  height: 150,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline:'central',
  
  
}));


export default function PieChartWithCenterLabel({wdata}) {


   // console.log(wdata,"data from pie")
    //let newData=[]
 let total=0
//  const newData=[
//     {label:'A',value:2},
//     {
//         label:"B",value:2}
    
//  ]   
let data=wdata.map((ele,index)=>{
    total+=ele.value
   
    return {...ele,label:`${ele.label} (${ele.value})`}
}) 



    return (
    <PieChart series={[{ data, innerRadius: 50 ,startAngle:360,endAngle:0,cx:80}]} {...size}    >
      <PieCenterLabel>
      {`${total} Total`}
      </PieCenterLabel>
    </PieChart>
  );
}

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    const lines = children.split(' ');
  
    return (
      <>
        {lines.map((line, index) => (
          <StyledText
            key={index}
            x={left-50+ width / 2}
            y={top + height / 2 + index * 24} // Adjust spacing between lines
            fontWeight={index==0?"bold":"normal"}
          >
            {line}
          </StyledText>
        ))}
      </>
    );
  }
// import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import { styled } from '@mui/material/styles';

// const StyledText = styled('text')(({ theme }) => ({
//   fill: theme.palette.text.primary,
//   textAnchor: 'middle',
//   dominantBaseline: 'central',
// }));

// export default function PieChartWithCenterLabel({ wdata }) {
//   let total = 0;

//   let data = wdata.map((ele) => {
//     total += ele.value;
//     return { ...ele, label: `${ele.label} (${ele.value})` };
//   });

//   return (
//     <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <PieChart
//         series={[{ data, innerRadius: 60, startAngle: 360, endAngle: 0 }]}
//         width="100%" // Set width to 100%
//         height="100%" // Set height to 100%
//         sx={{
//           width: '100%',
//           height: '100%',
//         }}
//       >
//         <PieCenterLabel>
//           {`${total} Total`}
//         </PieCenterLabel>
//       </PieChart>
//     </div>
//   );
// }

// function PieCenterLabel({ children }) {
//   const { width, height } = useDrawingArea();
//   const lines = children.split(' ');

//   return (
//     <>
//       {lines.map((line, index) => (
//         <StyledText
//           key={index}
//           x={width / 2} // Centers text horizontally
//           y={height / 2 + index * 24} // Centers text vertically
//           fontWeight={index === 0 ? 'bold' : 'normal'}
//         >
//           {line}
//         </StyledText>
//       ))}
//     </>
//   );
// }
