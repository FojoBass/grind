'use client';
import { NavOptInt } from '@/types';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import CustomLink from './CustomLink';
import { usePathname } from 'next/navigation';
import { dropDown } from '@/helpers';

interface NavDropInt {
  subOpts: NavOptInt[] | undefined;
  title: string;
}

const NavDrop: React.FC<NavDropInt> = ({ title, subOpts }) => {
  const [isDrop, setIsDrop] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLUListElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (wrapperRef.current && contentRef.current)
      dropDown(isDrop, wrapperRef.current, contentRef.current);
  }, [isDrop]);

  useEffect(() => {
    if (
      pathname.includes('/testimonials') ||
      pathname.includes('/faq') ||
      pathname.includes('/pricing') ||
      pathname.includes('/services')
    )
      setIsActive(true);
    else setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    if (wrapperRef.current) {
      const parentEl = wrapperRef.current.parentElement;
      if (parentEl) {
        parentEl.onmouseenter = () => setIsDrop(true);
        parentEl.onmouseleave = () => setIsDrop(false);
        return () => {
          parentEl.onmouseenter = null;
          parentEl.onmouseleave = null;
        };
      }
    }
  }, []);

  return (
    <>
      <p className={`nav_title ${isActive ? 'active' : ''}`}>
        {title}{' '}
        <span className='icon'>
          <FaAngleDown />
        </span>
      </p>
      <div className='drop_wrapper' ref={wrapperRef}>
        <ul className='drop_content' ref={contentRef}>
          {subOpts?.map(({ link, title }) => (
            <li className='drop_opt' key={title}>
              <CustomLink
                elClass='drop_opt_title'
                delay={0}
                link={link}
                title={title}
                key={title}
                dispatch={setIsDrop}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavDrop;
