"use client"
import React, { useState } from 'react';
import Image from "next/image";

const About = ({ selectedColor }) => {
  const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyles = isHovered
        ? {
              backgroundColor: 'white',
              color: selectedColor,
              border: `1px solid ${selectedColor}`,
          }
        : {
              backgroundColor:selectedColor,
              color: 'white',
              border: `1px solid ${selectedColor}`,
          };
  return (
    <section id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <Image
              alt="about"
              src="/blank.jpg"
              width={800}
              height={800}
              className="absolute inset-0 h-full w-full rounded-xl"
            />
          </div>

          <article className="sm:w-full lg:mr-20">
            <h2
              className=" font-bold"
              style={{ color: selectedColor }}
            >
              ABOUT ME
            </h2>
            <p className="font-bold text-black text-[20px] w-[360px]">
              A passionate Senior Designer and Front-End Developer based In NYC,
              USA
            </p>

            <p className="w-[350px] text-gray-400 mt-4">
              I am passionate Senior Designer, and I'm very passionate and
              dedicated to my work. With 7 years experience as a professional
              Web developer, I have acquired the skills and knowledge necessary
              to make your project a success.
            </p>
            <Image
              src="/signature.png"
              alt="signature"
              width={300}
              height={200}
            />

            <h2 style={ buttonStyles }
              className={`p-2 px-3 border-[1px] hover:border-primary hover:text-black hover:bg-white rounded-full w-[200px] h-12 text-center items-center text-[18px] mt-2  cursor-pointer  bg-primary text-white`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Download CV
            </h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
