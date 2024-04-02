'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useGlobalContext } from '@/context';
import { teamMems } from '@/data';
import LazyLoad from './LazyLoad';
import useIntersection from '@/hooks/useIntersection';
import CustomLink from './CustomLink';
import { GoArrowUpRight } from 'react-icons/go';

const AboutTeam = () => {
  const { slidesPerView, highlightElRefs, hPos } = useGlobalContext();
  const intersectionRefs = useIntersection();

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination]}
      className='team_mems'
      slidesPerView={slidesPerView ?? 1}
      loop={true}
      spaceBetween={20}
    >
      {teamMems.map(({ imgUrl, name, position }) => {
        const uniqId = name;
        const { x, y } = hPos?.find((pos) => pos.id === uniqId) ?? {
          x: -300,
          y: -300,
        };

        return (
          <SwiperSlide key={name}>
            <CustomLink delay={0} elClass='' link={`/team/${name}`}>
              <div
                className='team_mem box_highlight'
                ref={(el) => {
                  if (el) {
                    intersectionRefs.current.push(el);
                    !highlightElRefs?.current.find((rEl) => rEl === el) &&
                      highlightElRefs?.current.push(el);
                  }
                }}
                style={
                  {
                    '--x': x + 'px',
                    '--y': y + 'px',
                  } as React.CSSProperties
                }
                data-id={uniqId}
              >
                <div className='img_wrapper'>
                  <LazyLoad alt={name} src={imgUrl} />
                </div>

                <div className='bottom'>
                  <div className='info'>
                    <p>{position}</p>
                    <h3>{name}</h3>
                  </div>
                  <span className='icon'>
                    <GoArrowUpRight />
                  </span>
                </div>
              </div>
            </CustomLink>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AboutTeam;
