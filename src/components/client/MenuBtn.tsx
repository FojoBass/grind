'use client';
import { useGlobalContext } from '@/context';
import React from 'react';

const MenuBtn = () => {
  const { isSideOpen, setIsSideOpen } = useGlobalContext();

  return (
    <button
      className={`menu_btn ${isSideOpen ? 'active' : ''}`}
      onClick={() => setIsSideOpen && setIsSideOpen((prev) => !prev)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuBtn;
