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
      <section className="bg-gray-100 px-4 py-8 sm:px-2 sm:py-12 lg:px-20 lg:py-20" id="services">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center">
            <div className="max-w-lg lg:mx-0 lg:text-left">
              <h2 className="text-primary font-bold mb-2">SERVICES</h2>
              <h2 className="text-3xl font-bold sm:text-xl">
                I offer a Full-cycle of Web Development Services
              </h2>
              <p className="mt-4 text-gray-400">
                For more than 20 years our experts have been accomplishing
                enough with modern Web Development, new generation programming
                language, and Full Stack developers to deliver cost-effective
                solutions.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-1">
                {Progressbar.map((item, index) => (
                  <ProgressBar label={item.label} progress={item.progress} key={index}/>
                ))}
              </div>
            </div>
            <div className="grid lg:hidden gap-4">
              {ServiceData.map((item, index) => (
                <ServicesCard key={index} img={item.img} name={item.name} className="shadow-lg" />
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-col gap-4">
              <div className="w-full">
                {ServiceDataLeft.map((item, index) => (
                  <ServicesCard key={index} img={item.img} name={item.name} className="shadow-lg" />
                ))}
              </div>
              <div className="w-full">
                {ServiceDataRight.map((item, index) => (
                  <ServicesCard key={index} img={item.img} name={item.name} className="shadow-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
