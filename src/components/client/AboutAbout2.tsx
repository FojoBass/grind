'use client';
import { aboutImg2 } from '@/assets';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import ImgScrollEff from './ImgScrollEff';
import useIntersection from '@/hooks/useIntersection';
import CustomLink from './CustomLink';
import LazyLoad from './LazyLoad';

const AboutAbout2 = () => {
  const intersectionRefs = useIntersection();

  return (
    <section className='about2 bottom_line top_backlight'>
      <div className='center_sect'>
        <ImgScrollEff intersectionRefs={intersectionRefs}>
          <LazyLoad alt='team mates' src={aboutImg2} isImgRefs={true} />
        </ImgScrollEff>

        <div className='right_side'>
          <div
            className='int_wrapper'
            ref={(el) => el && intersectionRefs.current.push(el)}
          >
            <h3 className='heading'>From passion project To brand catalyst</h3>
            <p className='more_heading'>
              Bringer wasn't born in a boardroom; it was born in a coffee shop,
              fueled by late-night brainstorming and a shared belief in the
              power of creativity.
            </p>

            <p className='more_info'>
              We saw a digital landscape filled with noise and sameness, and we
              knew we had the spark to ignite something different. Today, we're
              a team of passionate storytellers, designers, and strategists who
              bring brands to life with vibrant visuals, captivating narratives,
              and data-driven campaigns.
            </p>
          </div>

          <div
            className='link_wrapper'
            ref={(el) => el && intersectionRefs.current.push(el)}
          >
            <CustomLink delay={0} elClass='' link='/contacts'>
              <span className='icon'>
                <GoArrowUpRight />
              </span>
              <div className='other_side'>
                <h4 className='title'>Join the Movement</h4>
                <p className='more'>tell your story</p>
              </div>
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAbout2;
