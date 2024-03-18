"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { Menu } from '../data/data';


const Navbar = () => {
    const [icon,setIcon] = useState(false);
    
    const setClickIcon =()=>{
    setIcon(prevState => !prevState);
    }


  return (
    <div className='flex items-center justify-between px-4 '>
    <div>
     <Image src='/logo.png' alt='logo' height={40} width={30} className='m-2' />
     </div>
     <div className='flex items-center gap-10 justify-around'>
     <ul  className={`${icon ? 'block lg:flex lg::items-center gap-8 ':'hidden'}`}>
        {Menu.map((item,index)=>(
            <li className=' hover:text-primary' key={item.id}>{item.name}</li>
        ))}
     </ul>
   { !icon ? <Image onClick={setClickIcon} src='/hamburger.png' alt='icon' width={30} height={50} />
    : <Image onClick={setClickIcon} src='/cross.png' alt='cross' width={30} height={50}/>
    }
     </div>
    </div>
  )
}

export default Navbar
