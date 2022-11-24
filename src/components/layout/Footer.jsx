import React from 'react'
import {TfiMicrosoftAlt  } from "react-icons/tfi";
import {DiReact} from 'react-icons/di'

function Footer() {
    let date =  new Date().getFullYear();
    console.log(date);
    
  return (
    <div className='text-center fs-6 bg-dark bg-opacity-50 text-white p-4 '>
        <DiReact className='fs-1 mb-4 text-italic'/>
       <p className='mb-0'> Copyright © {date}. All rights reserved</p>
       <p className='mb-0'>Developed with 💝 by Meghendra Sharma | Full Stack Developer</p>
    </div>
  )
}

export default Footer