"use client";
import { useEffect, useState } from "react";

const MagicCursor = ({selectedColor}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const targetElement = e.target;
      if (targetElement.tagName === "IMG") {
        setHoveredElement(targetElement);
        setIsVisible(true);
      } else {
        setHoveredElement(null);
        setIsVisible(true);
      }
    };

    const handleScroll = () => {
      setIsVisible(true);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`cursor ${
            hoveredElement
              ? "bg-secondary z w-20 h-20 border-none"
              : "bg-transparent"
          } ${
            hoveredElement ? "shadow-primary" : ""
          } absolute w-10 h-10 border-2 border-primary rounded-full`}
          style={{ left: `${position.x - 12}px`, top: `${position.y - 12}px`,border:`1px solid ${selectedColor}` }}
        >
          <div
          style={{backgroundColor:selectedColor}}
            className={`${
              hoveredElement
                ? "hidden"
                : "absolute w-1 h-1 bg-primary rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            }`}
          />
        </div>
      )}
    </>
  );
};

export default MagicCursor;





