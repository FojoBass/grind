'use client';

import { toggleAnimate } from '@/helpers';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface LinkInt {
  elClass: string;
  link: string;
  title: string;
  delay: number;
  isNavLink?: boolean;
  dispatch?: Dispatch<SetStateAction<boolean>>;
}

const CustomLink: React.FC<LinkInt> = ({
  elClass,
  delay,
  link,
  title,
  isNavLink,
  dispatch,
}) => {
  const [isLinkActive, setIsLinkActive] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (link !== '/') setIsLinkActive(pathname.includes(link));
    else setIsLinkActive(pathname === link);
  }, [isNavLink, pathname, link]);

  const handleRouteChange: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const el = e.currentTarget as HTMLElement;

    toggleAnimate(false);

    setTimeout(() => {
      router.push(el.getAttribute('href') ?? '');
    }, 1500);

    dispatch && dispatch(false);
  };

  return (
    <Link
      className={`${elClass} ${isLinkActive ? 'active' : ''}`}
      href={link}
      // style={{ transitionDelay: `${delay}ms` }}

      onClick={handleRouteChange}
    >
      {title}
    </Link>
  );
};

export default CustomLink;
