import { useGlobalContext } from '@/context';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';

interface LazyLoadInt {
  // children: React.ReactNode;
  isImgRefs?: boolean;
  isImg2Refs?: boolean;
  src: StaticImageData;
  alt: string;
}

const LazyLoad: React.FC<LazyLoadInt> = ({
  isImgRefs = false,
  isImg2Refs = false,
  src,
  alt,
}) => {
  const [isIntersect, setIsIntersects] = useState(false);
  const [isImgLoading, setIsImgLoading] = useState(true);
  const { imgRefs, img2Refs } = useGlobalContext();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const spinnerRef = useRef<HTMLDivElement | null>(null);

  const handleImgLoad: React.ReactEventHandler<HTMLImageElement> = () => {
    setIsImgLoading(false);
  };

  const callBack: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsIntersects(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBack);

    if (spinnerRef) {
      const parentEl = spinnerRef.current?.parentElement;

      parentEl && observer.observe(parentEl);
    }
  }, []);

  return (
    <>
      {isIntersect ? (
        <>
          <Image
            src={src}
            alt={alt}
            ref={(el) => {
              imgRef.current = el;
              if (isImgRefs && el && imgRefs) {
                !imgRefs.current.find((rEl) => rEl === el) &&
                  imgRefs.current.push(el);
              }

              if (isImg2Refs && el && img2Refs) {
                !img2Refs.current.find((rEl) => rEl === el) &&
                  img2Refs.current.push(el);
              }
            }}
            onLoad={handleImgLoad}
          />
          {isImgLoading && (
            <div className='spinner overlay'>
              <span className='icon'>
                <TbFidgetSpinner />
              </span>
            </div>
          )}
        </>
      ) : (
        <div className='spinner not_intersect' ref={spinnerRef}>
          <span className='icon'>
            <TbFidgetSpinner />
          </span>
        </div>
      )}
    </>
  );
};

export default LazyLoad;
