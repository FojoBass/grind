import React from 'react';

interface SectHeaderInt {
  title: string;
  info: string;
}

const SectHeader: React.FC<SectHeaderInt> = ({ title, info }) => {
  return (
    <header className='sect_heading'>
      <h1>{title}</h1>
      <p>{info}</p>
    </header>
  );
};

export default SectHeader;
