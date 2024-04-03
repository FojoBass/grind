'use client';
import React from 'react';
import ImgScrollEff from './ImgScrollEff';
import useIntersection from '@/hooks/useIntersection';
import { useGlobalContext } from '@/context';
import { aboutImg1 } from '@/assets';
import IntWrapper from './IntWrapper';
import CustomLink from './CustomLink';
import { GoArrowUpRight } from 'react-icons/go';
import LazyLoad from './LazyLoad';

const AboutAbout = () => {
  const intersectionRefs = useIntersection();
  const { imgRefs } = useGlobalContext();

  return (
    <section className='about bottom_line'>
      <div className='center_sect'>
        <div className='top'>
          <ImgScrollEff intersectionRefs={intersectionRefs}>
            <LazyLoad alt='Team mates' isImgRefs={true} src={aboutImg1} />
          </ImgScrollEff>
        </div>

        <div className='bottom'>
          <div className='left'>
            <h1
              ref={(el) =>
                el &&
                !intersectionRefs.current.find((rel) => rel === el) &&
                intersectionRefs.current.push(el)
              }
            >
              Igniting brands that spark movements.
            </h1>

            <IntWrapper elClass='link_wrapper'>
              <CustomLink delay={0} elClass='' link='/portfolio'>
                <div className='other_side'>
                  <h4 className='title'>Unleash your Brand's potential</h4>
                  <p className='more'>explore our work</p>
                </div>
                <span className='icon'>
                  <GoArrowUpRight />
                </span>
              </CustomLink>
            </IntWrapper>
          </div>

          <div
            className='right'
            ref={(el) =>
              el &&
              !intersectionRefs.current.find((rel) => rel === el) &&
              intersectionRefs.current.push(el)
            }
          >
            <p>
              We help creative agencies, designers, and other creative people to
              connect with potential clients.
            </p>
            <p>
              We're not just creatives; we're brand-whisperers, storytellers,
              and digital alchemists. We take your vision, infuse it with our
              spark, and craft unforgettable experiences that ignite
              imaginations and leave audiences begging for more. At Bringer, we
              don't just build brands, we build movements.
            </p>
            <p>
              We are a team of passionate and experienced designers, developers,
              and marketers who specialize in helping businesses of all sizes
              achieve their goals. We believe that creativity is the key to
              success, and we are committed to helping our clients unleash their
              full potential.
            </p>
            <p>
              We believe in the power of creativity. We help creative
              professionals create a strong online presence that showcases their
              work and tells their story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAbout;
