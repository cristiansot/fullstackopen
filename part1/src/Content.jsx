import React from 'react';
import Part from "./Part";

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

export default Content;
