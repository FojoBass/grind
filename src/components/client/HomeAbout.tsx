'use client';
import { homeImg4 } from '@/assets';
import Image from 'next/image';
import React, { useRef } from 'react';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import ImgScrollEff from './ImgScrollEff';
import { toggleAnimate } from '@/helpers';
import { useRouter } from 'next/navigation';
import useIntersection from '@/hooks/useIntersection';

// todo Add loading state for images

const HomeAbout = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const router = useRouter();
  const intersectionRefs = useIntersection();

  const handleRouteChange: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const el = e.currentTarget as HTMLElement;

    toggleAnimate(false);

    setTimeout(() => {
      router.push(el.getAttribute('href') ?? '');
    }, 1500);
  };

  return (
    <section className='about bottom_line'>
      <div className='center_sect'>
        <ImgScrollEff intersectionRefs={intersectionRefs}>
          <Image src={homeImg4} alt='Team mates' ref={imgRef} />
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
            <Link href='/about' onClick={handleRouteChange}>
              <span className='icon'>
                <GoArrowUpRight />
              </span>
              <div className='other_side'>
                <h4 className='title'>We are a Passionate Team</h4>
                <p className='more'>learn more about us</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
