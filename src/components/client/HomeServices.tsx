'use client';
import React from 'react';
import CustomLink from './CustomLink';
import { fullServiceOpt } from '@/data';
import useIntersection from '@/hooks/useIntersection';
import { useGlobalContext } from '@/context';
import HomeSectInfo from './HomeSectInfo';

const HomeServices = () => {
  const intersectionRefs = useIntersection();
  const { highlightElRefs, hPos } = useGlobalContext();

  return (
    <section className='services'>
      <div className='center_sect sect'>
        <div
          className='left_side sect_info'
          ref={(el) => el && intersectionRefs.current.push(el)}
        >
          <HomeSectInfo
            title='Our Services'
            info=' We offer a wide range of creative services to help business of all
            sizes achieve their goals'
            url='/services'
            urlTitle='discover all services'
          />
        </div>

        <div className='right_side'>
          <div className='services_opts'>
            {fullServiceOpt.map(({ title, price, info }) => {
              const uniqId = title;
              const [before, after] = String(price).split('.');
              const { x, y } = hPos?.find((pos) => pos.id === uniqId) ?? {
                x: -300,
                y: -300,
              };

              return (
                <div
                  className='services_opt sect_opt box_highlight'
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
                    } as React.CSSProperties
                  }
                  data-id={uniqId}
                >
                  <h3>{title}</h3>
                  <p className='info'>{info}</p>

                  <div className='price_wrapper'>
                    starting from
                    <span className='amount'>
                      ${before}.<sup>{after}</sup>
                    </span>
                  </div>

                  <CustomLink
                    delay={0}
                    elClass='cta_btn'
                    link='/'
                    title='discover details'
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
