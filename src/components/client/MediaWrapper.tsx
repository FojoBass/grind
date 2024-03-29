'use client';
import useClip from '@/hooks/useClip';
import { OverlayPosEnum } from '@/types';
import React, { useEffect, useRef } from 'react';

interface MediaWrapperint {
  children: React.ReactNode;
  elClass: string;
  pos: OverlayPosEnum;
}
// ! Take a look at this. Eslint raising dust on useClip in useEffect
const useMediaWrapperEffect = (
  wrapperRef: React.MutableRefObject<HTMLDivElement | null>,
  pos: OverlayPosEnum
) => {
  console.log(wrapperRef);

  if (wrapperRef.current) {
    const wrapperEl = wrapperRef.current;
    const bgEl = wrapperEl.children[0] as HTMLElement;
    const overEl =
      wrapperEl.children[
        wrapperEl.children.length - 1
      ].tagName.toLowerCase() === 'svg'
        ? (wrapperEl.children[wrapperEl.children.length - 2] as HTMLElement)
        : (wrapperEl.children[wrapperEl.children.length - 1] as HTMLElement);

    const clipId = useClip(bgEl, overEl, pos);

    bgEl.style.clipPath = `url(#${clipId})`;
  }
};

const MediaWrapper: React.FC<MediaWrapperint> = ({
  children,
  elClass,
  pos,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // useMediaWrapperEffect(wrapperRef, pos);

  useEffect(() => {
    if (wrapperRef.current) {
      const wrapperEl = wrapperRef.current;
      const bgEl = wrapperEl.children[0] as HTMLElement;
      const overEl =
        wrapperEl.children[
          wrapperEl.children.length - 1
        ].tagName.toLowerCase() === 'svg'
          ? (wrapperEl.children[wrapperEl.children.length - 2] as HTMLElement)
          : (wrapperEl.children[wrapperEl.children.length - 1] as HTMLElement);

      const clipId = useClip(bgEl, overEl, pos);

      bgEl.style.clipPath = `url(#${clipId})`;

      addEventListener('resize', () => {
        setTimeout(() => {
          const clipId = useClip(bgEl, overEl, pos);
          bgEl.style.clipPath = `url(#${clipId})`;
        }, 1000);
      });
    }
  }, []);

  return (
    <div className={elClass + ' ' + 'clip_container'} ref={wrapperRef}>
      {children}
    </div>
  );
};

export default MediaWrapper;
