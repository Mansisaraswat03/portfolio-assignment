import Image from "next/image";
import React from "react";

const ServicesCard = ({ img, name }) => {
  return (
    <>
      <div className="rounded-xl bg-white max-h-40 border border-gray-100 hover:border-gray-200 p-3 my-4">
        <span className="inline-block rounded-lg p-3">
          <Image src={img} alt="img" width={50} height={50} />
        </span>
        <h2 className="mt-2 font-bold mx-4 text-xl">{name}</h2>
      </div>
    </>
  );
};

export default ServicesCard;
