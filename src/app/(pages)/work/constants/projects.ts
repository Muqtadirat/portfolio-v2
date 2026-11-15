import {
  digittallyApp,
  digittallyPage,
  digiWeb,
  // etchASketch,
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
  // todoList,
  giricarts,
  cartsVendor,
} from '@/assets';
import { StaticImageData } from 'next/image';

interface ProjectProps {
  title: string;
  image: StaticImageData;
  category: string[];
  description: string;
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
    title: 'Payrit Marketing Website V2',
    image: payritWebV,
    category: ['Fintech', 'Marketing Website'],
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
      'Complex SaaS platform for invoices, payroll, taxes, and more across a large team codebase.',
  },
  {
    title: 'GiriCarts Vendor Dashboard',
    image: cartsVendor,
    category: ['E-commerce', 'SaaS'],
    description:
      'Multi-branch vendor management with HQ and branch level access control.',
  },
  {
    title: 'GiriCarts Marketing Website',
    image: giricarts,
    category: ['E-commerce', 'Marketing Website'],
    description: 'Marketing website for a cross-border e-commerce platform.',
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
    title: 'Digit-tally Marketing Website V2',
    image: digiWeb,
    category: ['SaaS', 'Marketing Website'],
    description:
      'Full redesign with a stronger visual hierarchy and a more polished first impression.',
  },
  {
    title: 'GiriToday Marketing Website V2',
    image: giriWebV,
    category: ['E-commerce', 'Marketing Website'],
    description:
      'Second iteration with a cleaner UI. One of three versions shipped in under a year.',
  },
  {
    title: 'GiriToday Referral Hub',
    image: giriReferral,
    category: ['E-commerce'],
    description:
      'Built solo. Referral tracking, rewards, and network growth for an e-commerce platform.',
  },
  {
    title: 'Digit-tally Timesheet',
    image: timesheet1,
    category: ['SaaS'],
    description:
      'Time tracking app for logging hours, monitoring attendance, and streamlining payroll.',
  },
  {
    title: 'Payrit Marketing Website',
    image: payritWeb,
    category: ['Fintech', 'Marketing Website'],
    description:
      'First version of the Payrit marketing site, the foundation for the V2 redesign.',
  },
  {
    title: 'GiriToday Marketing Website',
    image: giriWeb1,
    category: ['E-commerce', 'Marketing Website'],
    description:
      'First iteration of the GiriToday marketing website, version one of three.',
  },
  {
    title: 'Digit-tally Marketing Website',
    image: digittallyPage,
    category: ['SaaS', 'Marketing Website'],
    description:
      'Original marketing website for Digit-tally, built with a team of two frontend engineers.',
  },
  // {
  //   title: 'Etch A Sketch',
  //   image: etchASketch,
  //   category: ['Other'],
  //   description: 'A browser-based Etch A Sketch built with HTML, CSS, and JavaScript.',
  // },
  // {
  //   title: 'To-Do List',
  //   image: todoList,
  //   category: ['Other'],
  //   description: 'A simple to-do app for organizing and tracking tasks.',
  // },
];

export default projects;
