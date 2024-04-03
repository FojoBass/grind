'use client';
import useIntersection from '@/hooks/useIntersection';
import React from 'react';

interface IntWrapperInt {
  children: React.ReactNode;
  elClass: string;
}

const IntWrapper: React.FC<IntWrapperInt> = ({ children, elClass }) => {
  const intersectionRefs = useIntersection();

  return (
    <div
      className={`int_wrapper ${elClass}`}
      ref={(el) =>
        el &&
        !intersectionRefs.current.find((rel) => rel === el) &&
        intersectionRefs.current.push(el)
      }
    >
      {children}
    </div>
  );
};

export default IntWrapper;
