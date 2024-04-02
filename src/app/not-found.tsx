'use client';
import { bulbOff, bulbOn } from '@/assets';
import CustomLink from '@/components/client/CustomLink';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const NotFound = () => {
  const [isLight, setIsLight] = useState(false);

  return (
    <section className='not_found'>
      <h1>
        4
        <div className='img_wrapper'>
          <Image
            alt='bulb off'
            src={bulbOff}
            className={`${!isLight ? 'active' : ''}`}
          />
          <Image
            alt='bulb on'
            src={bulbOn}
            className={`${isLight ? 'active on' : 'on'}`}
          />
        </div>
        4
      </h1>
      <p>Page not found!</p>
      <Link
        href='/'
        onMouseEnter={() => setIsLight(true)}
        onMouseLeave={() => setIsLight(false)}
      >
        Return Home
      </Link>
    </section>
  );
};

export default NotFound;
