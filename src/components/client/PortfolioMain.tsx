'use client';
import { portfolioOpts } from '@/data';
import useIntersection from '@/hooks/useIntersection';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const PortfolioMain = () => {
  const intersectionRefs = useIntersection();
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const initialEntry = useRef(true);
  const sliderChHeight = useRef(0);
  const initialY = useRef(0);
  const isPointerDown = useRef(false);
  const portOptRefs = useRef<HTMLDivElement[]>([]);

  const handleHover: React.MouseEventHandler = (e) => {
    const targetEl = e.currentTarget as HTMLElement;
    imgRefs.current.forEach((el) => {
      el.classList.remove('active');
      if (el.dataset.id === targetEl.dataset.id) el.classList.add('active');
    });
  };

  const setWrapperHeight = () => {
    if (sliderRef.current && sliderWrapperRef.current) {
      const sliderEl = sliderRef.current;
      const sliderWrapperEl = sliderWrapperRef.current;
      sliderChHeight.current = initialEntry.current
        ? sliderEl.children[0].getBoundingClientRect().height / 1.1
        : sliderEl.children[0].getBoundingClientRect().height;

      sliderWrapperEl.style.height = initialEntry.current
        ? sliderChHeight.current + 'px'
        : sliderChHeight.current + 'px';

      if (initialEntry.current) initialEntry.current = false;
    }
  };

  const setTransform = (dY: number) => {
    const sliderEl = sliderRef.current;

    if (sliderEl) {
      const iY = parseFloat(
        getComputedStyle(sliderEl).transform.split(',')[
          getComputedStyle(sliderEl).transform.split(',').length - 1
        ]
      );

      sliderEl.style.transform = `translateY(${iY + dY / 5}px)`;
    }
  };

  const callBack: IntersectionObserverCallback = (entries) => {
    const sliderEl = sliderRef.current;
    if (sliderEl) {
      entries.forEach((entry) => {
        const targetEl = entry.target;
        const prevEl = targetEl.previousElementSibling;

        if (entry.isIntersecting) {
          const initialY = parseFloat(
            getComputedStyle(sliderEl).transform.split(',')[
              getComputedStyle(sliderEl).transform.split(',').length - 1
            ]
          );
          if (!prevEl) {
            const remEl = sliderEl.removeChild(
              sliderEl.children[sliderEl.children.length - 1]
            );

            sliderEl.style.transform = `translateY(${
              initialY - sliderChHeight.current
            }px)`;
            sliderEl.insertBefore(remEl, targetEl);
          } else if (prevEl.previousElementSibling) {
            const remEl = sliderEl.removeChild(prevEl.previousElementSibling);
            sliderEl.style.transform = `translateY(${
              initialY + sliderChHeight.current
            }px)`;
            sliderEl.appendChild(remEl);
          }
        }
      });
    }
  };

  useEffect(() => {
    let resizeListener: () => void;
    let wheelListener: (e: WheelEvent) => void;
    let pointerDownListener: (e: PointerEvent) => void;
    let pointerMoveListener: (e: PointerEvent) => void;
    let pointerUpListener: () => void;

    const sliderEl = sliderRef.current;

    if (sliderWrapperRef.current && portOptRefs.current.length && sliderEl) {
      setTimeout(() => {
        setWrapperHeight();
        resizeListener = () => setWrapperHeight();

        wheelListener = (e) => {
          const dY = -e.deltaY;
          setTransform(dY);
        };

        pointerDownListener = (e) => {
          initialY.current = e.clientY;
          isPointerDown.current = true;
        };

        pointerMoveListener = (e) => {
          if (isPointerDown.current) {
            const dY = e.clientY - initialY.current;
            setTransform(dY);
          }
        };

        pointerUpListener = () => {
          initialY.current = 0;
          isPointerDown.current = false;
        };

        sliderEl.addEventListener('resize', resizeListener);
        sliderEl.addEventListener('wheel', wheelListener);
        sliderEl.addEventListener('pointerdown', pointerDownListener);
        sliderEl.addEventListener('pointermove', pointerMoveListener);
        sliderEl.addEventListener('pointerup', pointerUpListener);

        const observer = new IntersectionObserver(callBack, {
          root: sliderWrapperRef.current,
          threshold: 0.5,
        });

        portOptRefs.current.forEach((opt) => {
          observer.observe(opt);
        });
      }, 1000);
    }

    return () => {
      sliderEl?.removeEventListener('resize', resizeListener);
      sliderEl?.removeEventListener('wheel', wheelListener);
      sliderEl?.removeEventListener('pointerdown', pointerDownListener);
      sliderEl?.removeEventListener('pointermove', pointerMoveListener);
      sliderEl?.removeEventListener('pointerup', pointerUpListener);
    };
  }, []);

  return (
    <main ref={(el) => el && intersectionRefs.current.push(el)}>
      {portfolioOpts.map(({ imgUrl, title }, index) => (
        <Image
          key={title}
          alt={title}
          src={imgUrl}
          data-id={title}
          className={`bg_img ${!index ? 'active' : ''}`}
          ref={(el) =>
            el &&
            !imgRefs.current.find((rel) => rel === el) &&
            imgRefs.current.push(el)
          }
        />
      ))}

      <div className='slider_wrapper' ref={sliderWrapperRef}>
        <div className='slider' ref={sliderRef}>
          {portfolioOpts.map(({ categ, imgUrl, title }) => (
            <div
              className='port_opt bottom_line'
              key={title}
              data-id={title}
              onMouseEnter={handleHover}
              ref={(el) =>
                el &&
                !portOptRefs.current.find((rel) => rel === el) &&
                portOptRefs.current.push(el)
              }
            >
              <div className='center_sect'>
                <div className='port_info'>
                  <div className='img_wrapper'>
                    <Image alt={title} src={imgUrl} />
                  </div>

                  <p className='categ'>{categ}</p>
                  <h3 className='title'>{title}</h3>
                </div>

                <span className='icon'>
                  <GoArrowUpRight />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PortfolioMain;
