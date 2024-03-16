import HeroSect from '@/components/client/HeroSect';
import HomeAbout from '@/components/client/HomeAbout';
import PageAnimation from '@/components/client/PageAnimation';

export default function Home() {
  return (
    <section id='home_sect'>
      <HeroSect />
      <HomeAbout />
      <PageAnimation />
    </section>
  );
}
