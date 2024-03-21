"use client"
import React, { useState } from 'react'

const Colors = () => {
    const [isopen,setIsOpen] = useState(false);
    const handleIsOpen=()=>{
        setIsOpen((prevState) => !prevState);
    }
  return (
    <div className='flex justify-end sticky top-20 z-20'>
      <div className=' bg-black h-9 w-5 ' onClick={handleIsOpen}></div>
      {
        isopen ? 
        (<div className='w-40 h-40 bg-primary '>

        </div>)
         : ""
      }
    </div>
  )
}

export default Colors
