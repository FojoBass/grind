import IntWrapper from '@/components/client/IntWrapper';
import PageAnimation from '@/components/client/PageAnimation';
import PortfolioMain from '@/components/client/PortfolioMain';
import React from 'react';

const Portfolio = () => {
  return (
    <section id='portfolio_sect'>
      <PortfolioMain />
      <IntWrapper elClass='int_footer'>
        <footer className='port_footer'>
          Copyright © 2024. All Rights Reserved.
        </footer>
      </IntWrapper>
      <PageAnimation />
    </section>
  );
};

export default Portfolio;
