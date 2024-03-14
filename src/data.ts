import { NavOptInt, ServiceOptInt } from './types';

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

const servicesOpts: ServiceOptInt[] = [
  { title: 'graphic design', url: '/services/graphic-design' },
  { title: 'content creation', url: '/services/content-creationg' },
  { title: 'branding', url: '/services/branding' },
  { title: 'marketing', url: '/services/marketing' },
  { title: 'web design', url: '/services/web-design' },
];

export { navOpts, servicesOpts };
