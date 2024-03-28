'use client';
import React from 'react';
import ImgScrollEff2 from './ImgScrollEff2';
import Image from 'next/image';
import { homeImg3 } from '@/assets';
import useIntersection from '@/hooks/useIntersection';
import HomeSectInfo from './HomeSectInfo';
import { testimonials } from '@/data';
import { useGlobalContext } from '@/context';
import { FaRegStar, FaStar } from 'react-icons/fa';
import MediaWrapper from './MediaWrapper';
import { OverlayPosEnum } from '@/types';
import { FaArrowRight } from 'react-icons/fa6';

const HomeClientSays = () => {
  const intersectionRefs = useIntersection();
  const { highlightElRefs, hPos } = useGlobalContext();

  return (
    <>
      <section className='client_says top_backlight'>
        <div className='center_sect'>
          <ImgScrollEff2 intersectionRefs={intersectionRefs}>
            <Image src={homeImg3} alt='image' />
          </ImgScrollEff2>
        </div>
        <div className='center_sect sect'>
          <div
            className='sect_info'
            ref={(el) => el && intersectionRefs.current.push(el)}
          >
            <HomeSectInfo
              title='What Clients Say'
              info='Here are some of the most inspiring reviews from our clients. Your opinion is very important to us ’cause we have always try to evolve and improve in the professional field and work on mistakes.'
              url='/about'
              urlTitle='read all testimonials'
            />
          </div>

          <div className='right_side'>
            <div className='testimonials'>
              {testimonials.map(({ position, author, msg, stars }) => {
                const uniqId = author;
                const { x, y } = hPos?.find((pos) => pos.id === uniqId) ?? {
                  x: -300,
                  y: -300,
                };
                return (
                  <div
                    className='testimonial sect_opt box_highlight'
                    ref={(el) => {
                      if (el) {
                        intersectionRefs.current.push(el);
                        !highlightElRefs?.current.find((rEl) => rEl === el) &&
                          highlightElRefs?.current.push(el);
                      }
                    }}
                    key={author}
                    style={
                      {
                        '--x': x + 'px',
                        '--y': y + 'px',
                      } as React.CSSProperties
                    }
                    data-id={uniqId}
                  >
                    <p className='info'>"{msg}"</p>
                    <h4>{author}</h4>
                    <footer>
                      <p className='position'>{position}</p>
                      <div className='stars_wrapper'>
                        <span className='icon'>
                          <FaStar />
                        </span>
                        <span className='icon'>
                          <FaStar />
                        </span>
                        <span className='icon'>
                          <FaStar />
                        </span>
                        <span className='icon'>
                          <FaStar />
                        </span>
                        <span className='icon'>
                          {stars === 4 ? <FaRegStar /> : <FaStar />}
                        </span>
                      </div>
                    </footer>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className='home_form'>
        <div className='center_sect'>
          <MediaWrapper elClass='form_container' pos={OverlayPosEnum.tr}>
            <div
              className='form_wrapper wrapper'
              ref={(el) => el && intersectionRefs.current.push(el)}
            >
              <h2 className='title'>Ready to set your Brand ablaze?</h2>

              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type='email'
                  name=''
                  id=''
                  placeholder='email@example.com'
                />
                <button className='submit_btn'>
                  <span className='icon'>
                    <FaArrowRight />
                  </span>
                </button>
              </form>
            </div>

            <p
              className='info_box text_over_top'
              ref={(el) => el && intersectionRefs.current.push(el)}
            >
              Let's craft a visual identity that ignites passion and loyalty. ✨
            </p>
          </MediaWrapper>
        </div>
      </section>
    </>
  );
};

export default HomeClientSays;
