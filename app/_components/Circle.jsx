import React from 'react';
  
const Circle = ({color}) => {
  return (
    <div className={`w-8 h-8 rounded-full bg-${color}-500`} />
  )
}

export default Circle;

