'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.png';

const Logo = () => {
  return (
    <h2 className='logo_text'>
      <Link href='/'>
        gr
        <span className='img_wrapper'>
          <Image src={logo} alt='gring logo' />

          <span className='ray'></span>
          <span className='ray'></span>
          <span className='ray'></span>
        </span>
        nd
      </Link>
    </h2>
  );
};

export default Logo;
