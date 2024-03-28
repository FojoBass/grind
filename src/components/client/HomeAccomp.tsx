'use client';
import { useGlobalContext } from '@/context';
import { accomp } from '@/data';
import useIntersection from '@/hooks/useIntersection';
import React from 'react';

const HomeAccomp = () => {
  const intersectionRefs = useIntersection();
  const { highlightElRefs, hPos } = useGlobalContext();

  return (
    <div className='accomplished'>
      <div className='center_sect'>
        <div className='accom_opts'>
          {accomp.map(({ title, info }, index) => {
            const uniqId = title;
            const { x, y } = hPos?.find((pos) => pos.id === uniqId) ?? {
              x: -300,
              y: -300,
            };

            return (
              <div
                className='box_highlight sect_opt accom_opt'
                ref={(el) => {
                  if (el) {
                    intersectionRefs.current.push(el);
                    !highlightElRefs?.current.find((rEl) => rEl === el) &&
                      highlightElRefs?.current.push(el);
                  }
                }}
                key={title}
                style={
                  {
                    '--x': x + 'px',
                    '--y': y + 'px',
                    transitionDelay: `${(index + 1) * 200 - index * 100}ms`,
                  } as React.CSSProperties
                }
                data-id={uniqId}
              >
                <span className='info'>{info}</span>
                <div className='title'>{title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeAccomp;
