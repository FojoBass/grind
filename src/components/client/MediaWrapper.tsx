'use client';
import useClip from '@/hooks/useClip';
import { OverlayPosEnum } from '@/types';
import React, { useEffect, useRef } from 'react';

interface MediaWrapperint {
  children: React.ReactNode;
  elClass: string;
  pos: OverlayPosEnum;
}

const MediaWrapper: React.FC<MediaWrapperint> = ({
  children,
  elClass,
  pos,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

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
    }
  }, []);

  return (
    <div className={elClass + ' ' + 'clip_container'} ref={wrapperRef}>
      {children}
    </div>
  );
};

export default MediaWrapper;
