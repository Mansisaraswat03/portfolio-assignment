import Image from 'next/image';
import React from 'react';

const ServicesCard = ({img,name}) => {
  return (
    <div>
       <a
          className="block rounded-xl bg-white border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring py-8 w-[220px] mt-6"
          href="#"
        >
          <span className="inline-block rounded-lg p-3">
           <Image src={img} alt="img" width={50} height={50}/>
          </span>

          <h2 className="mt-2 font-bold mx-4 text-xl">{name}</h2>

        </a>
    </div>
  )
}

export default ServicesCard
