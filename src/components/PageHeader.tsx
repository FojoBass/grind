import React from 'react';
import IntWrapper from './client/IntWrapper';

interface PageHeaderInt {
  title: string;
  info: string;
}

const PageHeader: React.FC<PageHeaderInt> = ({ title, info }) => {
  return (
    <header className='page_heading bottom_backlight'>
      <div className='center_sect'>
        <IntWrapper elClass='int_heading'>
          <h1>{title}</h1>
        </IntWrapper>

        <IntWrapper elClass='int_info'>
          <p>{info}</p>
        </IntWrapper>
      </div>
    </header>
  );
};

export default PageHeader;
