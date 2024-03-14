'use client';

import { navOpts } from '@/data';
import React, { useEffect, useRef, useState } from 'react';
import CustomLink from './CustomLink';
import { FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from '@/context';
import { dropDown } from '@/helpers';
import { usePathname } from 'next/navigation';

const SideNav = () => {
  const { setIsSideOpen, isSideOpen } = useGlobalContext();
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

  return (
    <aside
      className={`sidenav ${isSideOpen ? 'active' : ''}`}
      onClick={(e) =>
        e.currentTarget === e.target && setIsSideOpen && setIsSideOpen(false)
      }
    >
      <ul className='sidenav_opts'>
        {navOpts.map(({ link, title, subOpts }, index) => (
          <li className='sidenav_opt' key={title}>
            {link ? (
              <CustomLink
                elClass='sidenav_title '
                delay={0}
                link={link}
                title={title}
                key={title}
                isNavLink={true}
                dispatch={setIsSideOpen}
              />
            ) : (
              <>
                <p
                  className={`sidenav_title ${isActive ? 'active' : ''}`}
                  onClick={() => setIsDrop(!isDrop)}
                >
                  {title}{' '}
                  <span className='icon'>
                    <FaAngleRight />
                  </span>
                </p>
                <div
                  className={`drop_wrapper ${isDrop ? 'active' : ''}`}
                  ref={wrapperRef}
                >
                  <ul className='drop_content' ref={contentRef}>
                    {subOpts?.map(({ link, title }) => (
                      <li className='drop_opt' key={title}>
                        <CustomLink
                          elClass='drop_opt_title'
                          delay={0}
                          link={link}
                          title={title}
                          key={title}
                          dispatch={setIsSideOpen}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideNav;
