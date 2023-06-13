import React from 'react'
import './Card.css'
import { useState } from 'react'
import {  LayoutGroup , motion } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
 import "react-circular-progressbar/dist/styles.css";
 import {UilTimes} from "@iconscout/react-unicons"
 import  Chart from "react-apexcharts"




function Card(props) {
  const [expanded , setExpanded] = useState(false)
  return (   

        <LayoutGroup> 
          {
                expanded ? 
                <ExpandedCard param = {props} setExpanded={()=>setExpanded(false)}/>
                : 
                 <CompactCard param={props} setExpanded={() => setExpanded(true)} /> 
                      
                
                
          }
     </LayoutGroup> 
   
  );
};

function CompactCard({param , setExpanded}){
  const Png = param.png;
         return  (
               <motion.div className='CompactCard'
               layout
                style={{
                  background:param.color.backGround,
                  boxShadow:param.color.boxShadow
                }}
                layoutId='expandableCard'
                onClick={setExpanded}
               >
                <div className='radialBar'>
                  <CircularProgressbar
                    value={param.barValue}
                    text = {`${param.barValue}%`}
                    
                  />
                  <span>{param.title}</span>
                </div>
                <div className='details'>
                  <Png/>
                  <span>${param.value}</span>
                  <span>Last 24 Hours</span>
                </div>
               </motion.div>
         )
}



function ExpandedCard({param,setExpanded}  ){
          const data ={
            options:{

               type:"area",
               height:"auto"
            },
            dropShadow:{
                   enabled:false,
                   enabledOnSeries:undefined,
                   top:0,
                   left:0,
                   blur:3,
                   color:"#000",
                   opacity:0.35,
            },
              fill:{
                   colors:["#fff"],
                   type:"gradient",
              },
              dataLabels:{
                enabled:false,
              },
              stroke:{
                 curve:"smooth",
                 colors:["white"],
              },
              tooltip:{
                   x:{
                    format:"dd/MM/yy HH:mm",
                   },
              },
              grid:{
                  show:true,
              },
              xaxis:{
                type:"datatime",
                categories: [
                  "2018-09-19T00:00:00.000Z",
                  "2018-09-19T01:30:00.000Z",
                  "2018-09-19T02:30:00.000Z",
                  "2018-09-19T03:30:00.000Z",
                  "2018-09-19T04:30:00.000Z",
                  "2018-09-19T05:30:00.000Z",
                  "2018-09-19T06:30:00.000Z",
                ],
              },
          
          }


  return(
    <motion.div className='ExpandedCard'
    layout
    style={{
      background:param.color.backGround,
      boxShadow:param.color.boxShadow
    }}
    layoutId='expandableCard'
    >
      <div    style={{ alignSelf:"flex-end" ,color : "white" , cursor:"pointer"}}> 
        <UilTimes onClick={setExpanded}
        
        />  
      </div>
      <span>{param.title}</span>
      <div className='chartContainer'>
        <Chart series={param.series} type='area' options={data.options} />
      </div>
      <span>Last 24 Hours</span>
    </motion.div>
  )
}
 

export default Card