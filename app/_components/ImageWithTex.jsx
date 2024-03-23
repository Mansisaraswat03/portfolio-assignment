import Image from "next/image";

const ImageWithText = () => {
  return (
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 h-full w-full py-12 md:py-40" id="home">
          <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl text-transparent font-extra-bold bg-center bg-clip-text bg-video">
                  Senior Designer <br/> & Developer
              </h1>
              <p className="text-gray-400 pt-4">
                  Hi, I'm Alan Walker. A passionate Senior Designer and Front-End Developer <br/> based In NYC, USA
              </p>
          </div>
          <Image src='/blank.jpg' alt="home" width={300} height={300} className="order-1 md:order-2"/>
      </div>
  );
};

export default ImageWithText;


  