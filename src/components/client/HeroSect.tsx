'use client';
import React from 'react';
import MediaWrapper from './MediaWrapper';
import { homeImg1 } from '@/assets';
import { OverlayPosEnum } from '@/types';
import { servicesOpts } from '@/data';
import CustomLink from './CustomLink';
import useIntersection from '@/hooks/useIntersection';
import LazyLoad from './LazyLoad';

const HeroSect = () => {
  const intersectionRefs = useIntersection();

  return (
    <section className='hero bottom_backlight'>
      <div className='center_sect'>
        <header className='top'>
          <h1 className='hero_heading'>
            <span
              ref={(el) =>
                el &&
                !intersectionRefs.current.find((rel) => rel === el) &&
                intersectionRefs.current.push(el)
              }
              className='span1'
            >
              Bring your creative
            </span>{' '}
            <span
              ref={(el) =>
                el &&
                !intersectionRefs.current.find((rel) => rel === el) &&
                intersectionRefs.current.push(el)
              }
              className='span2'
            >
              ideas into <span className='heading_highlight'>Reality!</span>
            </span>
          </h1>

          <div
            className='img_wrapper'
            ref={(el) =>
              el &&
              !intersectionRefs.current.find((rel) => rel === el) &&
              intersectionRefs.current.push(el)
            }
          >
            <LazyLoad alt='image' src={homeImg1} />
          </div>
        </header>

        <MediaWrapper elClass='mid' pos={OverlayPosEnum.tr}>
          <div
            className='video_wrapper wrapper'
            ref={(el) =>
              el &&
              !intersectionRefs.current.find((rel) => rel === el) &&
              intersectionRefs.current.push(el)
            }
          >
            <video src='/videos/vid.mp4' loop muted autoPlay></video>
          </div>

          <p
            className='info_box text_over_top'
            ref={(el) =>
              el &&
              !intersectionRefs.current.find((rel) => rel === el) &&
              intersectionRefs.current.push(el)
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            impedit voluptates nostrum autem.
          </p>
        </MediaWrapper>

        <div className='bottom'>
          <p
            className='info'
            ref={(el) =>
              el &&
              !intersectionRefs.current.find((rel) => rel === el) &&
              intersectionRefs.current.push(el)
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            corporis ducimus facere non nisi excepturi? Perspiciatis, tempora.
          </p>

          <div className='services_wrapper'>
            {servicesOpts.map((service, index) => (
              <div
                className='link_wrapper'
                style={
                  {
                    '--trans_delay': `${(index + 1) * 200 - index * 100}ms`,
                  } as React.CSSProperties
                }
                key={service.title}
                ref={(el) =>
                  el &&
                  !intersectionRefs.current.find((rel) => rel === el) &&
                  intersectionRefs.current.push(el)
                }
              >
                <CustomLink
                  key={service.title}
                  delay={0}
                  elClass='service_opt'
                  link={service.link}
                  title={service.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSect;
