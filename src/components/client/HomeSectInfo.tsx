import React from 'react';
import CustomLink from './CustomLink';
import { GoArrowUpRight } from 'react-icons/go';

interface HomeSectInfoInt {
  title: string;
  info: string;
  url: string;
  urlTitle: string;
}

const HomeSectInfo: React.FC<HomeSectInfoInt> = ({
  title,
  info,
  url,
  urlTitle,
}) => {
  return (
    <>
      <h2 className='heading'>{title}</h2>
      <p>{info}</p>

      <CustomLink delay={0} elClass='' link={url}>
        <span className='title'>{urlTitle}</span>
        <span className='icon'>
          <GoArrowUpRight />
        </span>
      </CustomLink>
    </>
  );
};

export default HomeSectInfo;
