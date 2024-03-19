"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { Menu } from '../data/data';


const Navbar = () => {
    const [icon,setIcon] = useState(false);
    
    const setClickIcon =()=>{
    setIcon(prevState => !prevState);
    const clickSound = new Audio(`${icon ? "/1.mp3" : "/2.mp3"}`);
    clickSound.play();
    }


  return (
    <>
    <div className='flex items-center justify-between '>
    <div>
     <Image src='/logo.png' alt='logo' height={40} width={30} className='mt-2' />
     </div>
     <div className='flex items-center gap-10 justify-around'>
     <ul  className={` ${icon ? 'block lg:flex lg::items-center gap-8 transform transition-all duration-2000 delay-100 ease-in-out':'hidden'}`}>
        {Menu.map((item,index)=>(
            <li className=' hover:text-primary' key={item.id}>{item.name}</li>
        ))}
     </ul>
   { !icon ? <Image onClick={setClickIcon} src='/hamburger.png' alt='icon' width={30} height={50} />
    : <Image onClick={setClickIcon} src='/cross.png' alt='cross' width={30} height={50}/>
    }
     </div>
    </div>
    <audio id="click-sound">
        <source src="/1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="cross-sound">
        <source src="/2.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </>
  )
}

export default Navbar
