'use client';
import { toggleAnimate } from '@/helpers';
import React, { useEffect } from 'react';

const PageAnimation = () => {
  useEffect(() => {
    toggleAnimate(true);
  }, []);

  return <></>;
};

export default PageAnimation;
