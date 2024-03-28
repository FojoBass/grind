'use client';
import { useGlobalContext } from '@/context';
import { Position } from '@/types';
import React, { useEffect, useRef } from 'react';

const MouseLight = () => {
  const { pos, setPos, setHPos, highlightElRefs } = useGlobalContext();
  const initScrollRef = useRef(0);

  const handleHighlight = (
    cx: number,
    cy: number,
    highlightEls: HTMLElement[] | undefined
  ) => {
    if (highlightEls && highlightEls.length) {
      let modHPos: Position[] = [];
      highlightEls.forEach((el) => {
        const offSetY = el.getBoundingClientRect().top;
        const offsetX = el.getBoundingClientRect().left;

        const modX = cx - offsetX;
        const modY = cy - offSetY;
        const id = el.dataset.id;

        modHPos.push({ x: modX, y: modY, id });
      });
      setHPos && setHPos(modHPos);
    }
  };

  useEffect(() => {
    const highlightEls = highlightElRefs?.current;
    addEventListener('mousemove', (e) => {
      const x = e.clientX,
        y = e.clientY;
      setPos && setPos({ x, y });
      handleHighlight(x, y, highlightEls);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!initScrollRef.current) initScrollRef.current = scrollY;
      const diff = window.scrollY - initScrollRef.current;

      setHPos &&
        setHPos((prev) => prev.map((pos) => ({ ...pos, y: pos.y + diff })));

      initScrollRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='mouse_light'
      style={
        { '--x': `${pos?.x}px`, '--y': `${pos?.y}px` } as React.CSSProperties
      }
    ></div>
  );
};

export default MouseLight;
