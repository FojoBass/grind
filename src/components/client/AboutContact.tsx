'use client';
import React from 'react';
import MediaWrapper from './MediaWrapper';
import { OverlayPosEnum } from '@/types';
import { FaArrowRightLong } from 'react-icons/fa6';
import useIntersection from '@/hooks/useIntersection';
import CustomLink from './CustomLink';
import { GoArrowUpRight } from 'react-icons/go';
import LazyLoad from './LazyLoad';
import { aboutImg3 } from '@/assets';
import { useGlobalContext } from '@/context';

const AboutContact = () => {
  const intersectionRefs = useIntersection();
  const { highlightElRefs, hPos } = useGlobalContext();
  const uniqId = 'world_listen';
  const { x, y } = hPos?.find((pos) => pos.id === uniqId) ?? {
    x: -300,
    y: -300,
  };

  return (
    <section className='about_contact top_backlight'>
      <div className='center_sect'>
        <div className='left_side'>
          <MediaWrapper elClass='box_container' pos={OverlayPosEnum.br}>
            <div
              className='box wrapper'
              ref={(el) => el && intersectionRefs.current.push(el)}
            >
              <h1>Need to amplify your voice?</h1>
            </div>

            <p
              className='info_box text_over_bottom show'
              ref={(el) => el && intersectionRefs.current.push(el)}
            >
              Let's chat about your goals{' '}
              <span className='icon'>
                <FaArrowRightLong />
              </span>
            </p>
          </MediaWrapper>
        </div>

        <div className='right_side'>
          <h2
            className='some_info box_highlight'
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
            We will design campaigns that make the world listen
          </h2>
          <div className='bottom'>
            <CustomLink delay={0} elClass='' link='/contacts'>
              <div
                className='icon'
                ref={(el) => el && intersectionRefs.current.push(el)}
              >
                <GoArrowUpRight />
              </div>
            </CustomLink>

            <div
              className='img_wrapper'
              ref={(el) => el && intersectionRefs.current.push(el)}
            >
              <LazyLoad alt='' src={aboutImg3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
