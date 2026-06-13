import {
  digittallyApp,
  digittallyPage,
  digiWeb,
  etchASketch,
  giriAdmin,
  giriReferral,
  giriSeller,
  giriStore1,
  giriWeb1,
  giriWebV,
  payritDash,
  payritWeb,
  payritWebV,
  timesheet1,
  todoList,
} from '@/assets';
import { StaticImageData } from 'next/image';

interface ProjectProps {
  title: string;
  image: StaticImageData;
  category: string[];
  description:string
}

const projects: ProjectProps[] = [
  {
    title: 'Payrit Admin Dashboard',
    image: payritDash,
    category: ['Fintech', 'SaaS'],
    description:
      'Inherited a broken codebase. Rebuilt the entire fintech dashboard solo.',
  },
  {
    title: 'Payrit Website V2',
    image: payritWebV,
    category: ['Fintech', 'Landing Page'],
    description:
      'Sole developer on a fintech marketing site with USDC and cross-border payment features.',
  },
  {
    title: 'GiriToday Storefront',
    image: giriStore1,
    category: ['E-commerce'],
    description:
      'E-commerce storefront with cart, checkout, and product flows across a multi-app monorepo.',
  },
  {
    title: 'Digit-tally Accounting Software',
    image: digittallyApp,
    category: ['SaaS'],
    description:
      'Complex SaaS platform — invoices, payroll, taxes, and more across a large team codebase.',
  },
  {
    title: 'GiriToday Admin',
    image: giriAdmin,
    category: ['E-commerce', 'SaaS'],
    description:
      'Internal platform dashboard covering user management, order tracking, and analytics.',
  },
  {
    title: 'GiriToday Seller App',
    image: giriSeller,
    category: ['E-commerce'],
    description:
      'Seller tools for product listings, inventory management, and order fulfillment.',
  },
  {
    title: 'Digit-tally Landing Page V2',
    image: digiWeb,
    category: ['SaaS', 'Landing Page'],
    description:
      'Full redesign — stronger visual hierarchy and a more polished first impression.',
  },
  {
    title: 'GiriToday Landing Page V2',
    image: giriWebV,
    category: ['E-commerce', 'Landing Page'],
    description:
      'Second iteration, cleaner UI — one of three versions shipped in under a year.',
  },
  {
    title: 'GiriToday Referral Hub',
    image: giriReferral,
    category: ['E-commerce'],
    description:
      'Built solo — referral tracking, rewards, and network growth for an e-commerce platform.',
  },
  {
    title: 'Digit-tally Timesheet',
    image: timesheet1,
    category: ['SaaS'],
    description:
      'Time tracking app for logging hours, monitoring attendance, and streamlining payroll.',
  },
  {
    title: 'Payrit Website',
    image: payritWeb,
    category: ['Fintech', 'Landing Page'],
    description:
      'First version of the Payrit marketing site — foundation for the V2 redesign.',
  },
  {
    title: 'GiriToday Landing Page',
    image: giriWeb1,
    category: ['E-commerce', 'Landing Page'],
    description:
      'First iteration of the GiriToday landing page — version one of three.',
  },
  {
    title: 'Digit-tally Landing Page',
    image: digittallyPage,
    category: ['SaaS', 'Landing Page'],
    description:
      'Original landing page for Digit-tally, built with a team of two frontend engineers.',
  },
  // { title: 'Etch A Sketch', image: etchASketch, category: ['Other'] },
  // { title: 'To-Do List', image: todoList, category: ['Other'] },
];

export default projects;
