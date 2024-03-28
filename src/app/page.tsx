import HeroSect from '@/components/client/HeroSect';
import HomeAbout from '@/components/client/HomeAbout';
import PageAnimation from '@/components/client/PageAnimation';
import HomeServices from '@/components/client/HomeServices';
import { homeSliderOpts } from '@/data';
import HomePortfolio from '@/components/client/HomePortfolio';
import HomeClientSays from '@/components/client/HomeClientSays';

export default function Home() {
  return (
    <section id='home_sect'>
      <HeroSect />
      <HomeAbout />
      <HomeServices />

      <div className='slider_wrapper'>
        <div className='slider'>
          {homeSliderOpts.map((opt) => (
            <span className='slider_opt' key={opt}>
              {opt}
            </span>
          ))}
          {homeSliderOpts.map((opt) => (
            <span className='slider_opt' key={opt}>
              {opt}
            </span>
          ))}
        </div>
      </div>

      <HomePortfolio />
      <HomeClientSays />

      <PageAnimation />
    </section>
  );
}
