import { homeImg1 } from '@/assets';
import CustomLink from '@/components/client/CustomLink';
import PageAnimation from '@/components/client/PageAnimation';
import { servicesOpts } from '@/data';
import Image from 'next/image';

export default function Home() {
  return (
    <section id='home_sect'>
      <section className='hero  bottom_backlight'>
        <header className='top'>
          <h1 className='hero_heading'>
            Bring your creative ideas into <span>Reality!</span>
          </h1>

          <div className='img_wrapper'>
            <Image src={homeImg1} alt='image' />
          </div>
        </header>

        <div className='mid'>
          <div className='video_wrapper'>
            <video src='/videos/vid.mp4' loop muted autoPlay></video>
            <p className='info_box'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              exercitationem dignissimos voluptate dicta, quis numquam id
              perferendis.
            </p>
          </div>
        </div>

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
      </section>
      <PageAnimation />
    </section>
  );
}
