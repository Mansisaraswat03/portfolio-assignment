"use client";
import React, { useState } from "react";

const Colors = () => {
  const [isopen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div
      className="fixed right-0 top-40 z-20 flex gap-0 " >
      <div className=" bg-black h-12 w-5 items-center" onClick={handleIsOpen}>
      </div>
      {isopen ? <div className="w-42 h-80 bg-black">
        <h2 className="text-white text-center font-bold pt-12 px-3">Unlimited Colors</h2>
       
        <div className="grid grid-cols-4 gap-3 px-6 pt-4">
      {/* Row 1 */}
      <div className="w-8 h-8 rounded-full bg-blue-500"></div>
      <div className="w-8 h-8 rounded-full bg-green-500"></div>
      <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
      <div className="w-8 h-8 rounded-full bg-red-500"></div>

      {/* Row 2 */}
      <div className="w-8 h-8 rounded-full bg-purple-500"></div>
      <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
      <div className="w-8 h-8 rounded-full bg-pink-500"></div>
      <div className="w-8 h-8 rounded-full bg-gray-500"></div>

      {/* Row 3 */}
      <div className="w-8 h-8 rounded-full bg-teal-500"></div>
      <div className="w-8 h-8 rounded-full bg-orange-500"></div>
      <div className="w-8 h-8 rounded-full bg-cyan-500"></div>
      <div className="w-8 h-8 rounded-full bg-lime-500"></div>
    </div>
    <div>
    <h2 className="text-white text-center font-bold pt-12 px-3">Magic Cursor</h2>
    <div className="cursor absolute w-7 h-7 border-2 border-white rounded-full mx-14"><div className="absolute w-1 h-1 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/></div>
    </div>
      </div> : ""}
    </div>
  );
};

export default Colors;
