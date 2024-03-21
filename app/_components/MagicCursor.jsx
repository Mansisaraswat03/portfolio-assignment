"use client"
// MagicCursor.js
import { useEffect, useState } from 'react';

const MagicCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the cursor is over a text, button, image, or video element
      const targetElement = e.target;
      if (
        targetElement.tagName === 'TEXT' ||
        targetElement.tagName === 'BUTTON' ||
        targetElement.tagName === 'IMG' ||
        targetElement.tagName === 'VIDEO'
      ) {
        setHoveredElement(targetElement);
      } else {
        setHoveredElement(null);
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor ${hoveredElement ? 'bg-secondary z w-20 h-20 border-none' : 'bg-transparent'} ${hoveredElement ? 'shadow-primary' : ''} absolute w-10 h-10 border-2 border-primary rounded-full`}
        style={{ left: `${position.x - 12}px`, top: `${position.y - 12}px` }}
      >
        <div className={`${hoveredElement ?'hidden' : 'absolute w-1 h-1 bg-primary rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}`}></div>
      </div>
    </>
  );
};

export default MagicCursor;
