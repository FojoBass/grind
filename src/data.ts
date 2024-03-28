import { FaFacebookF, FaPatreon, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { portImg1, portImg2, portImg3, portImg4 } from './assets';
import {
  FooterLinksInt,
  FullServiceOptInt,
  LinkInt,
  NavOptInt,
  PortCategEnum,
  PortOptInt,
  SocialsInt,
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
        link: '/services',
      },
      {
        title: 'pricing',
        link: '/pricing',
      },
      {
        title: 'F.A.Q.',
        link: '/faq',
      },
      {
        title: 'testimonials',
        link: '/testimonials',
      },
    ],
  },
  {
    title: 'portfolio',
    link: '/portfolio',
  },
  {
    title: 'contacts',
    link: '/contacts',
  },
];

const servicesOpts: LinkInt[] = [
  { title: 'graphic design', link: '/services/graphic-design' },
  { title: 'content creation', link: '/services/content-creationg' },
  { title: 'branding', link: '/services/branding' },
  { title: 'marketing', link: '/services/marketing' },
  { title: 'web design', link: '/services/web-design' },
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
        link: '/services/branding',
        title: 'branding',
      },
      {
        link: '/services/marketing',
        title: 'marketing',
      },
      {
        link: '/services/graphic_design',
        title: 'graphic design',
      },
      {
        link: '/services/web_design',
        title: 'web design',
      },
      {
        link: '/services/content_creation',
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
        link: '/testimonials',
        title: 'testimonials',
      },
      {
        link: '/contacts',
        title: 'get in touch',
      },
    ],
  },
  {
    title: 'resources',
    linkOpts: [
      {
        link: '/pricing',
        title: 'pricing',
      },
      {
        link: '/faq',
        title: 'help center',
      },
      {
        link: '/services',
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
};
