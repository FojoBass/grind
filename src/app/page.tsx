import { homeImg1 } from '@/assets';
import CustomLink from '@/components/client/CustomLink';
import MediaWrapper from '@/components/client/MediaWrapper';
import PageAnimation from '@/components/client/PageAnimation';
import { servicesOpts } from '@/data';
import { OverlayPosEnum } from '@/types';
import Image from 'next/image';

export default function Home() {
  return (
    <section id='home_sect'>
      <section className='hero  bottom_backlight'>
        <div className='center_sect'>
          <header className='top'>
            <h1 className='hero_heading'>
              Bring your creative ideas into <span>Reality!</span>
            </h1>

            <div className='img_wrapper'>
              <Image src={homeImg1} alt='image' />
            </div>
          </header>

          <MediaWrapper elClass='mid' pos={OverlayPosEnum.tr}>
            <div className='video_wrapper'>
              <video src='/videos/vid.mp4' loop muted autoPlay></video>
            </div>

            <p className='info_box text_over_top'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              impedit voluptates nostrum autem.
            </p>
          </MediaWrapper>

          <div className='bottom'>
            <p className='info'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              corporis ducimus facere non nisi excepturi? Perspiciatis, tempora.
            </p>

            <div className='services_wrapper'>
              {servicesOpts.map((service) => (
                <CustomLink
                  key={service.title}
                  delay={0}
                  elClass='service_opt'
                  link={service.url}
                  title={service.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <PageAnimation />
    </section>
  );
}
