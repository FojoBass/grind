import React from 'react';
import IntWrapper from './IntWrapper';

interface SectHeaderInt {
  title: string;
  info: string;
}

const SectHeader: React.FC<SectHeaderInt> = ({ title, info }) => {
  return (
    <header className='sect_heading'>
      <IntWrapper elClass='int_heading'>
        <h1>{title}</h1>
      </IntWrapper>

      <IntWrapper elClass='int_info'>
        <p>{info}</p>
      </IntWrapper>
    </header>
  );
};

export default SectHeader;
