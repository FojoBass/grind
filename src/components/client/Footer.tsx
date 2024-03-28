'use client';
import React from 'react';
import Logo from './Logo';
import { socials } from '@/data';
import CustomLink from './CustomLink';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='top'>
        <div className='left'>
          <Logo />
          <p className='info'>
            We are a passionate team of developers and designers who believe in
            the power of creativity. We help creative people create a strong
            online presence that shows their work and tells a story.
          </p>
        </div>

        <div className='socials'>
          <h4>Follow us:</h4>

          <div className='socials_wrapper'>
            {socials.map(({ Icon, id, url }) => (
              <CustomLink
                delay={0}
                elClass='social_link'
                link={url}
                key={id}
                isSocialLink={true}
              >
                <span className='icon'>
                  <Icon />
                </span>
              </CustomLink>
            ))}
          </div>
        </div>
        <div className='right'></div>
      </div>
      <div className='bottom'>Copyright © 2024. All Rights Reserved.</div>
    </section>
  );
};

export default Footer;
