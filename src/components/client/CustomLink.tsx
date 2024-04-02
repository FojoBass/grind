'use client';

import { toggleAnimate } from '@/helpers';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

interface LinkInt {
  elClass: string;
  link: string;
  title?: string;
  delay: number;
  isNavLink?: boolean;
  isSocialLink?: boolean;
  dispatch?: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const CustomLink: React.FC<LinkInt> = ({
  elClass,
  delay,
  link,
  title,
  isNavLink = false,
  dispatch,
  children,
  isSocialLink = false,
}) => {
  const [isLinkActive, setIsLinkActive] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isMouseIn = useRef(false);

  const handleRouteChange: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const el = e.currentTarget as HTMLElement;

    toggleAnimate(false);

    setTimeout(() => {
      router.push(el.getAttribute('href') ?? '');
    }, 1500);

    dispatch && dispatch(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isMouseIn.current) {
      const el = e.currentTarget as HTMLElement;
      const mX = e.clientX;
      const mY = e.clientY;
      const elX = el.getBoundingClientRect().x;
      const elY = el.getBoundingClientRect().y;
      const mdX = mX - elX;
      const mdY = mY - elY;
      const elCy = el.getBoundingClientRect().height / 2;
      const elCx = el.getBoundingClientRect().width / 2;
      const dX = mdX - elCx;
      const dY = mdY - elCy;
      el.style.transform = `translate(${dX / 5}px, ${dY / 2}px)`;
    }
  };

  const handleMouseEnter: React.MouseEventHandler<HTMLElement> = (e) => {
    isMouseIn.current = true;
    e.currentTarget.onmousemove = handleMouseMove;
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    const el = e.currentTarget as HTMLElement;
    isMouseIn.current = false;
    el.style.transform = `translate(0px, 0px)`;
  };

  useEffect(() => {
    if (link !== '/') setIsLinkActive(pathname.includes(link));
    else setIsLinkActive(pathname === link);
  }, [isNavLink, pathname, link]);

  return (
    <Link
      className={`${elClass} ${isLinkActive ? 'active' : ''}`}
      href={link}
      onMouseEnter={isSocialLink ? handleMouseEnter : undefined}
      onMouseLeave={isSocialLink ? handleMouseLeave : undefined}
      onClick={handleRouteChange}
    >
      {children ? children : title}
    </Link>
  );
};

export default CustomLink;
