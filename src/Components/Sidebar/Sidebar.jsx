import React from 'react'
import './Sidebar.css'   
import Logo from "../../imgs/logo.png"
  import { SidebarData } from '../Data/Data'
  import {UilSignOutAlt , UilBars} from "@iconscout/react-unicons"
  import { useState } from 'react'
  import { motion } from 'framer-motion'




function Sidebar() {
    const  [selected , setSelected ] = useState(0);
     const [expanded , setExpanded] = useState(true)
    const sidebarsVariants = {
         true:{
            left:'0'
         },
         false:{
           left:'-60%'
         }
    }



  return (
    <>
          <div className='bars'  style={expanded?
      { left:"60%"} : {left:"5%"}
    }
      onClick={()=>setExpanded(!expanded)}
    >
  <UilBars/>
 </div>

    <motion.div className='Sidebar' 
       variants={sidebarsVariants}
       animate={window.innerWidth<=768?`${expanded}`:""}
    
    >
 
        <div className='Logo'>
            <img src={Logo} alt=''/>
            <span> 
                Sh<span>o</span>ps
            </span>
        </div>
        <div className='Menu'>
            { SidebarData.map((items,index) => {
                return(
                    <div className={selected===index?'menu-item active': 'menu-item'}
                      key={index}
                      onClick={()=> setSelected(index)}
                    >
                        <items.icon/>
                        <span>
                            {items.heading}
                        </span>
                    </div>
                )
            })}
             <div className='menu-item'>
                <UilSignOutAlt/>
             </div>
        </div>
             
    </motion.div>
    </>
  )
}

export default Sidebar