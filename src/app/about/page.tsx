import AboutAbout from '@/components/client/AboutAbout';
import PageAnimation from '@/components/client/PageAnimation';
import SectHeader from '@/components/client/SectHeader';
import PageHeader from '@/components/PageHeader';
import React from 'react';
import AboutTeam from '@/components/client/AboutTeam';

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
      <PageAnimation />
    </section>
  );
};

export default About;
