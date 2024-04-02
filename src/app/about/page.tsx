import AboutAbout from '@/components/client/AboutAbout';
import PageAnimation from '@/components/client/PageAnimation';
import SectHeader from '@/components/client/SectHeader';
import PageHeader from '@/components/PageHeader';
import React from 'react';
import AboutTeam from '@/components/client/AboutTeam';
import AboutAbout2 from '@/components/client/AboutAbout2';
import IntWrapper from '@/components/client/IntWrapper';
import { aboutServices } from '@/data';
import { GoArrowUpRight } from 'react-icons/go';
import CustomLink from '@/components/client/CustomLink';
import MediaWrapper from '@/components/client/MediaWrapper';
import { OverlayPosEnum } from '@/types';
import { FaArrowRightLong } from 'react-icons/fa6';
import AboutContact from '@/components/client/AboutContact';

const About = () => {
  return (
    <section id='about_sect'>
      <PageHeader
        info='We are a passionate team of designers and developers
Who believe 👽 in the power ⚡ of creativity.'
        title='about us'
      />
      <AboutAbout />

      <section className='team'>
        <div className='center_sect'>
          <SectHeader
            info='We are a team of experienced designers, developers, and marketers who specialize in helping businesses achieve their goals.'
            title='Meet the team'
          />

          <AboutTeam />
        </div>
      </section>

      <AboutAbout2 />

      <section className='about_services bottom_backlight'>
        <div className='top'>
          <div className='center_sect'>
            <div className='left'>
              <IntWrapper elClass='int_heading'>
                <h1>Unleashing the full spectrum of magic</h1>
              </IntWrapper>
            </div>
            <div className='right'>
              <IntWrapper elClass='int_info'>
                <p>
                  We offer a wide range of creative services to help businesses
                  all sizes achieve their goals.
                </p>
              </IntWrapper>
              <IntWrapper elClass='int_more_info'>
                <p>
                  We believe in a holistic approach to branding. We don't just
                  design logos or write copy; we craft strategies that touch
                  every aspect of your brand's digital experience. From brand
                  identity and website design to marketing campaigns and content
                  creation, we're your one-stop shop for igniting the potential
                  of your brand. Our services include:
                </p>
              </IntWrapper>
            </div>
          </div>
        </div>

        <IntWrapper elClass='int_bottom'>
          <div className='bottom'>
            {aboutServices.map(({ info, title }, index) => (
              <CustomLink
                delay={0}
                elClass=''
                link={`/services/${title}`}
                key={title}
              >
                <div
                  className={`serv_opt bottom_line ${!index ? 'top_line' : ''}`}
                  key={title}
                >
                  <div className='center_sect'>
                    <h1 className='title'>
                      {title}
                      <span>.</span>
                    </h1>
                    <div className='right'>
                      <p className='info'>{info}</p>
                      <span className='icon'>
                        <GoArrowUpRight />
                      </span>
                    </div>
                  </div>
                </div>
              </CustomLink>
            ))}
          </div>
        </IntWrapper>

        <IntWrapper elClass='int_btn'>
          <button className='cta_btn'>Explore All Services</button>
        </IntWrapper>
      </section>

      <AboutContact />

      <PageAnimation />
    </section>
  );
};

export default About;
