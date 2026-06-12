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
}

const projects: ProjectProps[] = [
  {
    title: 'Payrit Admin Dashboard',
    image: payritDash,
    category: ['Fintech', 'SaaS'],
  },
  {
    title: 'Payrit Website V2',
    image: payritWebV,
    category: ['Fintech', 'Landing Page'],
  },
  {
    title: 'GiriToday Storefront',
    image: giriStore1,
    category: ['E-commerce'],
  },
  {
    title: 'Digit-tally Accounting Software',
    image: digittallyApp,
    category: ['SaaS'],
  },
  {
    title: 'GiriToday Admin',
    image: giriAdmin,
    category: ['E-commerce', 'SaaS'],
  },
  {
    title: 'GiriToday Seller App',
    image: giriSeller,
    category: ['E-commerce'],
  },
  {
    title: 'Digit-tally Landing Page V2',
    image: digiWeb,
    category: ['SaaS', 'Landing Page'],
  },
  {
    title: 'GiriToday Landing Page V2',
    image: giriWebV,
    category: ['E-commerce', 'Landing Page'],
  },
  {
    title: 'GiriToday Referral Hub',
    image: giriReferral,
    category: ['E-commerce'],
  },
  { title: 'Digit-tally Timesheet', image: timesheet1, category: ['SaaS'] },
  {
    title: 'Payrit Website',
    image: payritWeb,
    category: ['Fintech', 'Landing Page'],
  },
  {
    title: 'GiriToday Landing Page',
    image: giriWeb1,
    category: ['E-commerce', 'Landing Page'],
  },
  {
    title: 'Digit-tally Landing Page',
    image: digittallyPage,
    category: ['SaaS', 'Landing Page'],
  },
  // { title: 'Etch A Sketch', image: etchASketch, category: ['Other'] },
  // { title: 'To-Do List', image: todoList, category: ['Other'] },
];
export default projects;
