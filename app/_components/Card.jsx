"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

const Card = ({name,type,path}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <article className="relative overflow-hidden rounded-lg " onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
    <Image src='/blank.jpg' alt='card' width={800} height={800} className="absolute inset-0 h-full w-full object-cover "/>
  
   <div className="relative pt-32 sm:pt-48 lg:pt-64 hover:bg-gradient-to-t from-gray-900/50 to-gray-900/25">
      <div className="p-4 sm:p-6">
        <p className={`block text-white/90 font-bold text-lg mb-2 opacity-0 transition-opacity duration-300   ${isHovered ? 'opacity-100' : ''}`}> {name}</p>
        
        <a href={path}>
          <h3 className={`mt-0.5 text-md text-white opacity-0 transition-opacity duration-300  ${isHovered ? 'opacity-100' : ''}`}>{type}</h3>
        </a>
      </div>
    </div>
  </article>
  )
}

export default Card
