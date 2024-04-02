import { FaFacebookF, FaPatreon, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import {
  portImg1,
  portImg2,
  portImg3,
  portImg4,
  portImg5,
  portImg6,
  portImg7,
  portImg8,
  teamImg1,
  teamImg2,
  teamImg3,
  teamImg4,
  teamImg5,
  teamImg6,
} from './assets';
import {
  AboutServicesInt,
  FooterLinksInt,
  FullServiceOptInt,
  LinkInt,
  NavOptInt,
  PortCategEnum,
  PortOptInt,
  SocialsInt,
  TeamMemsInt,
  TestimonialsInt,
  WhyUsOptInt,
} from './types';
import { FaInstagram } from 'react-icons/fa';

const navOpts: NavOptInt[] = [
  {
    title: 'home',
    link: '/',
  },
  {
    title: 'about us',
    link: '/about',
  },
  {
    title: 'more',
    link: '',
    subOpts: [
      {
        title: 'our services',
        link: '/ser',
      },
      {
        title: 'pricing',
        link: '/pri',
      },
      {
        title: 'F.A.Q.',
        link: '/fqa',
      },
      {
        title: 'testimonials',
        link: '/test',
      },
    ],
  },
  {
    title: 'portfolio',
    link: '/portfolio',
  },
  {
    title: 'contacts',
    link: '/cont',
  },
];

const servicesOpts: LinkInt[] = [
  { title: 'graphic design', link: '/' },
  { title: 'content creation', link: '/' },
  { title: 'branding', link: '/' },
  { title: 'marketing', link: '/' },
  { title: 'web design', link: '/' },
];

const fullServiceOpt: FullServiceOptInt[] = [
  {
    title: 'branding',
    info: 'We weave visual stories and craft strategic messaging that resonate at heartstrings and build unwavering trust.',
    price: 199.99,
  },
  {
    title: 'marketing',
    info: 'We design data-driven campaigns that crackle with energy, ignite engagement like wildfire, and increase conversions.',
    price: 99.99,
  },
  {
    title: 'graphic design',
    info: "We craft visual masterpieces that sing your brand's story in vibrant colors and captivating shapes.",
    price: 169.99,
  },
  {
    title: 'content creation',
    info: 'We weave compelling narratives into blog posts, website copy, and social media content that resonate with your audience.',
    price: 149.99,
  },
];

const homeSliderOpts: string[] = [
  'branding',
  'web design',
  'UI/UX',
  'marketing',
  'graphic design',
];

const whyUsOpts: WhyUsOptInt[] = [
  {
    title: "We don't just design, we unleash creative firestorms",
    info: "Tired of bland marketing and cookie-cutter websites? We infuse your brand with bold ideas and strategic brilliance, igniting campaigns that capture hearts and drive tangible results. Forget sparklers, we're here to light galaxies on fire.",
    slicePoints: { start: 5, end: 7 },
  },
  {
    title: 'We fuel creativity with data, guide passion with precision',
    info: "We're not just artistic dreamers, we're strategic alchemists. We blend data-driven insights with unbridled passion, ensuring your campaigns reach the right audience, hit the right chords, and deliver measurable results. Because passion without direction is a beautiful mess.",
    slicePoints: { start: 1, end: 3 },
  },
  {
    title: 'We craft emotional connections, not just visuals and copy',
    info: 'We delve deeper than pixels and prose. We understand the human heart, the language of emotions. We weave stories that resonate, visuals that linger in minds, and content that sparks conversations. Because true connection is the foundation of brand loyalty.',
    slicePoints: { start: 2, end: 4 },
  },
  {
    title: "We don't just work with you, we become your creative champions",
    info: "We don't see clients, we see collaborators. We believe in building partnerships, in understanding your vision, and becoming an extension of your team. Your goals are our canvas, your success our masterpiece. We paint your dreams into reality, together.",
    slicePoints: { start: 9, end: 0 },
  },
];

const accomp: { title: string; info: string }[] = [
  {
    title: 'Happy Customers',
    info: '8K+',
  },
  {
    title: 'Completed Projects',
    info: '420',
  },
  {
    title: 'Awards Won',
    info: '24',
  },
  {
    title: 'Years of Experience',
    info: '12+',
  },
];

const portOpts: PortOptInt[] = [
  {
    categ: PortCategEnum.br,
    title: 'Curology',
    imgUrl: portImg1,
  },
  {
    categ: PortCategEnum.ad,
    title: 'Cookie Dough',
    imgUrl: portImg2,
  },
  {
    categ: PortCategEnum.mk,
    title: 'Gaming Power',
    imgUrl: portImg3,
  },
  {
    categ: PortCategEnum.ad,
    title: 'Riot Energy',
    imgUrl: portImg4,
  },
];

const testimonials: TestimonialsInt[] = [
  {
    author: 'Sarah Janson',
    msg: "Before working with Bringer, our brand felt lost in the crowd. They not only gave us a stunning logo and website, but they also crafted a brand story that resonated with our customers. Now, we're seeing a surge in loyalty and engagement, and it all started with a spark!",
    position: 'CEO of Bloom Eco-Spa',
    stars: 5,
  },
  {
    author: 'Michael Kaper',
    msg: "Words cannot express how pleased we are with the visuals Bringer created for our brand. From the captivating infographics to the social media graphics that pop off the screen, they've injected an emotional punch into our communication that resonates deeply with our audience. Now, every visual tells our story with stunning clarity.",
    position: 'Founder of StoryCraft Books',
    stars: 4,
  },
  {
    author: 'Anna Larson',
    msg: "Words cannot express how pleased we are with the visuals Bringer created for our brand. From the captivating infographics to the social media graphics that pop off the screen, they've injected an emotional punch into our communication that resonates deeply with our audience. Now, every visual tells our story with stunning clarity.",
    position: 'Founder of StoryCraft Books',
    stars: 4,
  },
  {
    author: 'David Madison',
    msg: "Our old website was a confusing maze. Bringer transformed it into a user-friendly paradise! They crafted a streamlined navigation that makes finding information a breeze, and the mobile experience is flawless. The result? Increased traffic, higher engagement, and happier customers. They've truly reimagined the digital experience.",
    position: 'CTO of GreenTech Solutions',
    stars: 4,
  },
];

const socials: SocialsInt[] = [
  {
    Icon: FaFacebookF,
    id: 'fb',
    url: '/',
  },
  {
    Icon: FaInstagram,
    id: 'ins',
    url: '/',
  },
  {
    Icon: FaXTwitter,
    id: 'x',
    url: '/',
  },
  {
    Icon: FaTiktok,
    id: 'tik',
    url: '/',
  },
  {
    Icon: FaPatreon,
    id: 'pat',
    url: '/',
  },
];

const footerLinks: FooterLinksInt[] = [
  {
    title: 'services',
    linkOpts: [
      {
        link: '/',
        title: 'branding',
      },
      {
        link: '/',
        title: 'marketing',
      },
      {
        link: '/',
        title: 'graphic design',
      },
      {
        link: '/',
        title: 'web design',
      },
      {
        link: '/',
        title: 'content creation',
      },
    ],
  },
  {
    title: 'about us',
    linkOpts: [
      {
        link: '/about',
        title: 'about us',
      },
      {
        link: '/',
        title: 'testimonials',
      },
      {
        link: '/',
        title: 'get in touch',
      },
    ],
  },
  {
    title: 'resources',
    linkOpts: [
      {
        link: '/',
        title: 'pricing',
      },
      {
        link: '/',
        title: 'help center',
      },
      {
        link: '/',
        title: 'our services',
      },
      {
        link: '/',
        title: 'terms of use',
      },
      {
        link: '/',
        title: 'privacy policy',
      },
    ],
  },
];

const teamMems: TeamMemsInt[] = [
  {
    position: 'ceo, founder',
    name: 'Lorem Ipsum',
    imgUrl: teamImg1,
  },
  {
    position: 'concept artist',
    name: 'Dolor Itsum',
    imgUrl: teamImg2,
  },
  {
    position: 'client manager',
    name: 'Jane Doe',
    imgUrl: teamImg3,
  },
  {
    position: 'developer',
    name: 'John Doe',
    imgUrl: teamImg4,
  },
  {
    position: 'developer',
    name: 'Alexa Smith',
    imgUrl: teamImg5,
  },
  {
    position: 'developer',
    name: 'Baxter West',
    imgUrl: teamImg6,
  },
];

const aboutServices: AboutServicesInt[] = [
  {
    title: 'branding',
    info: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place.',
  },
  {
    title: 'marketing',
    info: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
  },
  {
    title: 'graphic design',
    info: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. ',
  },
  {
    title: 'web design',
    info: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder.',
  },
  {
    title: 'content creation',
    info: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common.',
  },
];

const portfolioOpts: PortOptInt[] = [
  {
    categ: PortCategEnum.br,
    imgUrl: portImg1,
    title: 'Curology',
  },
  {
    categ: PortCategEnum.ad,
    imgUrl: portImg2,
    title: 'Cookie Dough',
  },
  {
    categ: PortCategEnum.mk,
    imgUrl: portImg3,
    title: 'Gaming Power',
  },
  {
    categ: PortCategEnum.ad,
    title: 'Riot Energy',
    imgUrl: portImg4,
  },
  {
    categ: PortCategEnum.mk,
    title: 'Smoothie',
    imgUrl: portImg5,
  },
  {
    categ: PortCategEnum.br,
    title: 'Positive Beverage',
    imgUrl: portImg6,
  },
  {
    categ: PortCategEnum.br,
    title: 'Fashion Makeup',
    imgUrl: portImg7,
  },
  {
    categ: PortCategEnum.ad,
    title: 'Kombucha',
    imgUrl: portImg8,
  },
];

export {
  navOpts,
  servicesOpts,
  fullServiceOpt,
  homeSliderOpts,
  whyUsOpts,
  accomp,
  portOpts,
  testimonials,
  socials,
  footerLinks,
  teamMems,
  aboutServices,
  portfolioOpts,
};
