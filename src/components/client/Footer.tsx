'use client';
import React from 'react';
import Logo from './Logo';
import { footerLinks, socials } from '@/data';
import CustomLink from './CustomLink';
import useIntersection from '@/hooks/useIntersection';

const Footer = () => {
  const intersectionRefs = useIntersection();
  return (
    <footer
      className='footer'
      ref={(el) => el && intersectionRefs.current.push(el)}
    >
      <div className='top'>
        <div className='center_sect'>
          <div className='left'>
            <div
              className='int_wrapper'
              ref={(el) => el && intersectionRefs.current.push(el)}
            >
              <Logo />
              <p className='info'>
                We are a passionate team of developers and designers who believe
                in the power of creativity. We help creative people create a
                strong online presence that shows their work and tells a story.
              </p>
            </div>

            <div className='socials'>
              <h4 ref={(el) => el && intersectionRefs.current.push(el)}>
                Follow us:
              </h4>

              <div className='socials_wrapper'>
                {socials.map(({ Icon, id, url }, index) => (
                  <div
                    className='link_container'
                    style={{
                      transitionDelay: `${(index + 1) * 200 - index * 100}ms`,
                    }}
                    ref={(el) => el && intersectionRefs.current.push(el)}
                    key={id}
                  >
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='right'>
            {footerLinks.map(({ linkOpts, title }) => (
              <div
                className='sect_wrapper'
                key={title}
                ref={(el) => el && intersectionRefs.current.push(el)}
              >
                <h3>{title}</h3>
                {linkOpts.map(({ link, title }) => (
                  <CustomLink
                    delay={0}
                    elClass='footer_link'
                    link={link}
                    title={title}
                    key={title}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bottom'>Copyright © 2024. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
