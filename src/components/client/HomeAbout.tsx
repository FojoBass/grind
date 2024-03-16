'use client';
import { homeImg4 } from '@/assets';
import Image from 'next/image';
import React from 'react';
import CustomLink from './CustomLink';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

const HomeAbout = () => {
  return (
    <section className='about bottom_line'>
      <div className='center_sect'>
        <div className='img_wrapper'>
          <Image src={homeImg4} alt='Team mates' />

          <div className='right_side'>
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

            <div className='btn_wrapper'>
              <div className='link_wrapper'>
                {/* rememeber to make it cause things disappear */}
                <Link href='/about'>
                  <div className='icon'>
                    <GoArrowUpRight />
                  </div>
                  <h4 className='title'>We are a Passionate Team</h4>
                  <p className='more'>learn more about us</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
