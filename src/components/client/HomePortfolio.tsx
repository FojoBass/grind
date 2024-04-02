'use client';
import React from 'react';
import HomeSectInfo from './HomeSectInfo';
import useIntersection from '@/hooks/useIntersection';
import { portOpts, whyUsOpts } from '@/data';
import { useGlobalContext } from '@/context';
import HomeAccomp from './HomeAccomp';
import ImgScrollEff from './ImgScrollEff';
import { GoArrowUpRight } from 'react-icons/go';
import CustomLink from './CustomLink';
import LazyLoad from './LazyLoad';

const HomePortfolio = () => {
  const intersectionRefs = useIntersection();
  const { highlightElRefs, hPos } = useGlobalContext();

  return (
    <>
      <section className='why_us'>
        <div className='center_sect sect'>
          <div
            className='sect_info'
            ref={(el) => el && intersectionRefs.current.push(el)}
          >
            <HomeSectInfo
              title='Why Choose Us'
              info='We are a passionate team of designers and developers who believe in the power of creativity. We help creative professionals create a strong online presence that showcases their work and tells their story.'
              url='/about'
              urlTitle='learn more about us'
            />
          </div>

          <div className='right_side'>
            <div className='whyus_opts'>
              {whyUsOpts.map(({ info, title, slicePoints: { start, end } }) => {
                const uniqId = title;
                const { x, y } = hPos?.find((pos) => pos.id === uniqId) ?? {
                  x: -300,
                  y: -300,
                };
                const startText = title.split(' ').slice(0, start).join(' ');
                const middleText = end
                  ? title.split(' ').slice(start, end).join(' ')
                  : title.split(' ').slice(start).join(' ');
                const endText = end
                  ? title.split(' ').slice(end).join(' ')
                  : '';

                return (
                  <div
                    className='whyus_opt sect_opt box_highlight'
                    ref={(el) => {
                      if (el) {
                        intersectionRefs.current.push(el);
                        !highlightElRefs?.current.find((rEl) => rEl === el) &&
                          highlightElRefs?.current.push(el);
                      }
                    }}
                    key={title}
                    style={
                      {
                        '--x': x + 'px',
                        '--y': y + 'px',
                      } as React.CSSProperties
                    }
                    data-id={uniqId}
                  >
                    <h3>
                      {startText} <span className='spc'>{middleText}</span>
                      {endText && ` ${endText}`}
                      <span className='punc'>.</span>{' '}
                    </h3>
                    <p className='info'>{info}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <HomeAccomp />

      <section className='portfolio'>
        <div className='center_sect sect'>
          <div
            className='sect_info'
            ref={(el) => el && intersectionRefs.current.push(el)}
          >
            <HomeSectInfo
              title='Our Portfolio'
              info='We are proud of our work, and we are always looking for new challenges. Take a look at some of our recent creative portfolio works.'
              url='/portfolio'
              urlTitle='explore full portfolio'
            />
          </div>

          <div className='right_side'>
            <div className='portfolio_opts'>
              {portOpts.map(({ categ, title, imgUrl }, index) => {
                const uniqId = title;
                const { x, y } = hPos?.find((pos) => pos.id === uniqId) ?? {
                  x: -300,
                  y: -300,
                };

                return (
                  <CustomLink
                    delay={0}
                    elClass='portfolio_opt_link'
                    link={`/`}
                    key={title}
                  >
                    <div
                      className='portfolio_opt sect_opt box_highlight'
                      ref={(el) => {
                        if (el) {
                          intersectionRefs.current.push(el);
                          !highlightElRefs?.current.find((rEl) => rEl === el) &&
                            highlightElRefs?.current.push(el);
                        }
                      }}
                      style={
                        {
                          '--x': x + 'px',
                          '--y': y + 'px',
                        } as React.CSSProperties
                      }
                      data-id={uniqId}
                    >
                      <ImgScrollEff intersectionRefs={intersectionRefs}>
                        <LazyLoad alt={title} src={imgUrl} isImgRefs={true} />
                      </ImgScrollEff>

                      <div className='bottom'>
                        <div className='left_side'>
                          <h5 className='categ'>{categ}</h5>
                          <h3 className='title'>{title}</h3>
                        </div>

                        <span className='icon'>
                          <GoArrowUpRight />
                        </span>
                      </div>
                    </div>
                  </CustomLink>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePortfolio;
