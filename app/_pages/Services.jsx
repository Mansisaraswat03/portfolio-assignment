import React from 'react'
import ServicesCard from '../_components/ServicesCard';
import { ServiceDataLeft } from '../data/data';
import { ServiceDataRight } from '../data/data';
import { Progressbar } from '../data/data';
import { ServiceData } from '../data/data';

const ProgressBar = ({ label, progress }) => {
  return (
    <div className="mb-6 mt-4">
    <div className='flex justify-between'>
      <p className=" mb-2">{label}</p>
      <p>{progress} %</p>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 bg-primary rounded-full"
          style={{ width: `${progress}%`, height: '100%' }}
        ></div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 h-full px-20 py-20" id="services">
        <div className=" px-4 py-8 sm:px-2 sm:py-12 lg:px-8 lg:py-10">
          <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:items-center lg:gap-x-10">
            <div className=" max-w-lg  lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-primary font-bold mb-2">SERVICES</h2>
              <h2 className="text-3xl font-bold sm:text-xl w-70">
                I offer a Full-cycle of Web Development Services
              </h2>

              <p className="mt-4 text-gray-400">
                For more than 20 years our experts have been accomplishing
                enough with modern Web Development, new generation programming
                language, and Full Stack developers to deliver cost-effective
                solutions.
              </p>
              <div className="container mx-auto p-4">
                <div>
                {Progressbar.map((item,index)=>(
                  <ProgressBar label={item.label} progress={item.progress} key={index}/>
                ))}
                  </div>
              </div>
            </div>
            <div className="hidden lg:flex h-[400px] gap-4">
              <div className="pt-10 w-1/3">
                {ServiceDataLeft.map((item, index) => (
                  <ServicesCard key={index} img={item.img} name={item.name} className="shadow-lg" />
                ))}
              </div>
              <div className="w-1/3">
                {ServiceDataRight.map((item, index) => (
                  <ServicesCard key={index} img={item.img} name={item.name} className="shadow-lg" />
                ))}
              </div>
            </div>
            <div className='lg:hidden grid grid-cols-1'>
            {
              ServiceData.map((item,index)=>(
                <ServicesCard key={index} img={item.img} name={item.name} className="shadow-lg" />
              ))
            }

            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Services;