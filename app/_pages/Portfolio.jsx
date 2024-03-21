import React from 'react'
import Card from '../_components/Card'
import { Cards } from '../data/data'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className='px-10 lg:px-40 mt-8' id="portfolio">
    <h2 className='text-primary font-bold mb-2'>PORTFOLIO</h2>
    <p className='font-bold text-[20px] mb-4'>Each project is a unique piece of <br/> development</p>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 py-10'>
    {Cards.map((card, index) => (
        <Card key={index} name={card.name} type={card.type} path={card.path} />
      ))}
    </div>
      
    </div>
  )
}

export default Portfolio
