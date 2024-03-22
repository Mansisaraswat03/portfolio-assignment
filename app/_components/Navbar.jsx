"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "../data/data";
import Link from "next/link";

const Navbar = () => {
  const [icon, setIcon] = useState(false);
  const [menu,setMenu] = useState(false);
  const [color,setColor] = useState(null);

  const setClickIcon = () => {
    setIcon((prevState) => !prevState);
    const clickSound = new Audio(`${icon ? "/1.mp3" : "/2.mp3"}`);
    clickSound.play();
    setMenu((prevState) => !prevState);
  };

  const handleSetColor=(item)=>{
    setColor(item);
  }

  return (
    <>
      <div className=" md:mx-20 flex items-center justify-between  h-12 sticky top-0 z-50 ">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            height={40}
            width={30}
            className="mt-2 pl-1 cursor-pointer "
          />
        </div>
        <div className="hidden lg:flex items-center gap-10 justify-around cursor-pointer">
          <ul
            className={`transition-all duration-3000 ${
              icon
                ? "block lg:flex lg::items-center gap-8  "
                : "hidden"
            }`}
          >
            {Menu.map((item, index) => (
              <Link href={item.path}><li className={`hover:text-primary ${color===item ? "text-primary" : ""}`}   key={index.id} onClick={()=>handleSetColor(item)}>
                {item.name}
              </li></Link>
            ))}
          </ul>
          {!icon ? (
            <Image
              onClick={setClickIcon}
              src="/hamburger.png"
              alt="icon"
              width={30}
              height={50}
            />
          ) : (
            <Image
              onClick={setClickIcon}
              src="/cross.png"
              alt="cross"
              width={30}
              height={50}
            />
          )}
        </div>

        <div className="lg:hidden cursor-pointer">
        {!icon ? (
            <Image
              onClick={setClickIcon}
              src="/hamburger.png"
              alt="icon"
              width={30}
              height={50}
            />
          ) : (
            <Image
              onClick={setClickIcon}
              src="/cross.png"
              alt="cross"
              width={30}
              height={50}
            />
          )}
        </div>
      </div>
      <div className={`lg:hidden  ${
              menu
                ? "pt-4 cursor-pointer z-20 fixed bg-white w-full"
                : "hidden"
            }`}>
          <ul>
            {Menu.map((item, index) => (
              <Link href={item.path}><li className={`hover:text-primary pl-6 mt-1 font-semibold ${color===item ? "text-primary" : ""}`} key={index.id} onClick={()=>handleSetColor(item)}>
                {item.name}
              </li></Link>
            ))}
          </ul>
          </div>
      <audio id="click-sound">
        <source src="/1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="cross-sound">
        <source src="/2.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default Navbar;
