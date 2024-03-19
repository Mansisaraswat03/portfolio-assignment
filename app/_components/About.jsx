import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias doloribus impedit.
      </h2>
    </div> */}

        <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <Image
              alt="hero"
              src="/blank.jpg"
              width={500}
              height={1000}
              className="absolute inset-0 h-full  object-cover rounded-3xl ml-8"
            />
          </div>

          <div className="lg:mr-20">
            <article className="space-y-4">
              <h2 className="text-primary font-bold">ABOUT ME</h2>
              <p className=" font-bold text-black text-[25px] w-[420px]">
                A passionate Senior Designer and Front-End Developer based In
                NYC, USA
              </p>

              <p className="w-[400px] text-gray-400 mt-4">
                I am passionate Senior Designer, and I'm very passionate and
                dedicated to my work. With 7 years experience as a professional
                Web developer, I have acquired the skills and knowledge
                necessary to make your project a success.
              </p>
              <Image src='/signature.png' alt="signature" width={300} height={200} />
              
              <h2
                      className="p-2 px-3 border-[1px] hover:border-primary
                     hover:text-black hover:bg-white rounded-full w-[200px] h-12 text-center items-center
                        text-[18px] mt-2
                        cursor-pointer 
                        bg-primary text-white"
                    >
                      Download CV
                    </h2>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;