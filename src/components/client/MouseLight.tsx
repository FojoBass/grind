'use client';
import React, { useEffect, useState } from 'react';

const MouseLight = () => {
  const [pos, setPost] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListener('mousemove', (e) => {
      const x = e.clientX,
        y = e.clientY;
      setPost({ x, y });
    });
  }, []);

  return (
    <div
      className='mouse_light'
      style={
        { '--x': `${pos.x}px`, '--y': `${pos.y}px` } as React.CSSProperties
      }
    ></div>
  );
};

export default MouseLight;
