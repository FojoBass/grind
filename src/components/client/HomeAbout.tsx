'use client';
import { homeImg4 } from '@/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import ImgScrollEff from './ImgScrollEff';
import { toggleAnimate } from '@/helpers';
import { useRouter } from 'next/navigation';
import useIntersection from '@/hooks/useIntersection';
import CustomLink from './CustomLink';
import { useGlobalContext } from '@/context';
import ShortUniqueId from 'short-unique-id';

// todo Add loading state for images

const HomeAbout = () => {
  const intersectionRefs = useIntersection();
  const { imgRefs } = useGlobalContext();

  return (
    <section className='about bottom_line'>
      <div className='center_sect'>
        <ImgScrollEff intersectionRefs={intersectionRefs}>
          <Image
            src={homeImg4}
            alt='Team mates'
            ref={(el) =>
              el &&
              imgRefs &&
              !imgRefs.current.find((rEl) => rEl === el) &&
              imgRefs.current.push(el)
            }
          />
        </ImgScrollEff>

        <div className='right_side'>
          <div
            className='int_wrapper'
            ref={(el) => el && intersectionRefs.current.push(el)}
          >
            <h3 className='heading'>
              We are a passionate team of designers and developers.
            </h3>
            <p className='more_heading'>
              We are a passionate team of designers and developers who believe
              in the power of creativity.
            </p>

            <p className='more_info'>
              We are a team of passionate and experienced designers, marketers
              and developers, lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quod, exercitationem! Eaque perferendis autem dicta
              perspiciatis quo quibusdam eveniet iste doloribus!
            </p>
          </div>

          <div
            className='link_wrapper'
            ref={(el) => el && intersectionRefs.current.push(el)}
          >
            <CustomLink delay={0} elClass='' link='/about'>
              <span className='icon'>
                <GoArrowUpRight />
              </span>
              <div className='other_side'>
                <h4 className='title'>We are a Passionate Team</h4>
                <p className='more'>learn more about us</p>
              </div>
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
