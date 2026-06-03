import {
  cssColored,
  cypressColored,
  digittallyApp,
  digittallyApp2,
  digittallyApp3,
  digittallyApp4,
  digittallyApp5,
  digittallyApp6,
  digittallyPage,
  digittallyPage2,
  digittallyPage3,
  digiWeb,
  digiWeb2,
  digiWeb3,
  digiWeb4,
  etchASketch,
  etchASketch2,
  etchASketch3,
  framerColored,
  giriStore1,
  giriStore2,
  giriStore3,
  giriStore4,
  giriWeb1,
  giriWeb2,
  giriWeb3,
  giriWeb4,
  giriWebV,
  giriWebV2,
  giriWebV3,
  giriWebV4,
  giriWebV5,
  giriWebV6,
  gsapColored,
  htmlColored,
  javacriptColored,
  nextJsColored,
  payritWeb,
  payritWeb2,
  payritWeb3,
  payritWebV,
  payritWebV2,
  payritWebV3,
  payritWebV4,
  payritWebV5,
  payritWebV6,
  reactQueryColored,
  reduxColored,
  tailwindColored,
  timesheet1,
  timesheet2,
  timesheet3,
  timesheet4,
  timesheet5,
  timesheet6,
  todoList,
  todoList2,
  typescriptColored,
} from '@/assets';
import { StaticImageData } from 'next/image';

interface ProjectDetailsProps {
  role: string;
  year: string;
  link?: string;
  title: string;
  description: string;
  image: StaticImageData[];
  stack: StaticImageData[];
  noLink?: boolean;
}

const projectDetails: ProjectDetailsProps[] = [
  {
    title: 'Digit-tally Landing Page V2',
    year: '2026 - Present',
    link: 'https://www.digit-tally.io/',
    image: [digiWeb, digiWeb2, digiWeb3, digiWeb4],
    description:
      'A redesign of the Digit-Tally landing page — an accounting platform for managing invoices, receipts, credit notes, sales, and taxes. V2 focused on a more polished UI, improved structure, and a stronger first impression for prospective users.',
    role: 'Solely responsible for the entire rebuild, from design implementation to deployment, using Next.js, TypeScript, and Tailwind CSS.',
    stack: [
      typescriptColored,
      tailwindColored,
      reactQueryColored,
      nextJsColored,
    ],
  },
  {
    title: 'Payrit Website V2',
    year: '2025 - Present',
    link: 'https://www.payrit.com/',
    image: [
      payritWebV,
      payritWebV2,
      payritWebV3,
      payritWebV4,
      payritWebV5,
      payritWebV6,
    ],
    description:
      'The second version of Payrit introduces cross-border payments and USDC support, building on the fastest, safest, and most complete personal and business financial services.',
    role: 'I worked as the sole frontend developer using Next.js, Typescript, and Tanstack Query.',
    stack: [typescriptColored, tailwindColored, framerColored, nextJsColored],
  },
  {
    title: 'GiriToday Landing Page V2',
    year: '2025 - Present',
    link: 'https://www.giritoday.com/',
    image: [giriWebV, giriWebV2, giriWebV3, giriWebV4, giriWebV5, giriWebV6],
    description:
      'The second version of GiriToday’s landing page introduces a cleaner and more refined UI, while continuing to serve as the entry point for an African E-Commerce platform connecting global buyers with local African sellers.',
    role: 'Independently developed the landing page using Next.js, TypeScript, and Tailwind CSS.',
    stack: [
      typescriptColored,
      tailwindColored,
      reactQueryColored,
      framerColored,
      nextJsColored,
    ],
  },

  {
    title: 'Digit-tally Accounting Software',
    year: '2024 - Present',
    link: 'https://app.digit-tally.io/auth/signin',
    image: [
      digittallyApp,
      digittallyApp2,
      digittallyApp3,
      digittallyApp4,
      digittallyApp5,
      digittallyApp6,
    ],
    description:
      'Digit-tally is an accounting software for small, medium, and large enterprises. It allows businesses to manage invoices, receipts, credit notes, sales, and taxes.',
    role: 'I worked as a frontend engineer in a team of 4, focusing on the internal dashboard. I collaborated with the product design team, using Next.js, Typescript, and Tanstack Query.',
    stack: [
      typescriptColored,
      reactQueryColored,
      reduxColored,
      tailwindColored,
      cypressColored,
      gsapColored,
      nextJsColored,
    ],
  },
  {
    title: 'GiriToday Storefront',
    year: '2025 - Present',
    link: 'https://shop.giritoday.com/',
    image: [giriStore1, giriStore2, giriStore3, giriStore4],
    description:
      'Storefront for GiriToday, an African e-commerce platform connecting global buyers with local African sellers. It aims to bridge the gap between local artisans and the global market.',
    role: 'I worked in a team of two to develop the storefront using Next.js, TypeScript, and Tailwind CSS.',
    stack: [
      typescriptColored,
      tailwindColored,
      reduxColored,
      reactQueryColored,
      nextJsColored,
    ],
  },
  {
    title: 'Payrit Website',
    year: '2024',
    // link: 'https://www.payrit.com/',
    image: [payritWeb, payritWeb2, payritWeb3],
    description:
      'Payrit is a payment service that offers the fastest, safest, and most complete personal and business financial services.',
    role: 'I worked as the sole frontend developer using Next.js, Typescript, and Tanstack Query.',
    stack: [typescriptColored, tailwindColored, nextJsColored],
    noLink: true,
  },

  {
    title: 'GiriToday Landing Page',
    year: '2025',
    // link: 'https://www.giritoday.com/',
    image: [giriWeb1, giriWeb2, giriWeb3, giriWeb4],
    description:
      'Landing page for GiriToday, an African E-Commerce Platform connecting global buyers with local African seller aiming to bridge the gap between local African artisans and the global market.',
    role: 'Independently developed the landing page using Next.js, TypeScript, and Tailwind CSS.',
    stack: [
      typescriptColored,
      tailwindColored,
      reactQueryColored,
      nextJsColored,
    ],
    noLink: true,
  },
  {
    title: 'Digit-tally Landing Page',
    year: '2024 - 2025',
    // link: 'https://stgsvr008.digit-tally.io/',
    image: [digittallyPage, digittallyPage2, digittallyPage3],
    description:
      'The landing page for Digit-tally, an accounting software that helps businesses manage invoices, receipts, credit notes, sales, and taxes.',
    role: 'I collaborated with a team of 2 frontend engineers to build the landing page using Next.js, TypeScript, and Tailwind CSS.',
    stack: [
      typescriptColored,
      tailwindColored,
      reactQueryColored,
      nextJsColored,
    ],
    noLink: true,
  },
  {
    title: 'Digit-tally Timesheet',
    year: '2025',
    image: [
      timesheet1,
      timesheet2,
      timesheet3,
      timesheet4,
      timesheet5,
      timesheet6,
    ],
    description:
      'A timesheet web app for tracking and managing employee work hours. Built for Digit-tally to help teams log time, monitor attendance, and streamline reporting for payroll and productivity.',
    role: 'I collaborated with a team of 3 frontend engineers to build the landing page using Next.js, TypeScript, and Tailwind CSS.',
    stack: [
      typescriptColored,
      tailwindColored,
      reactQueryColored,
      reduxColored,
      nextJsColored,
      framerColored,
    ],
    noLink: true,
  },

  {
    title: 'Etch A Sketch',
    year: '2023',
    link: 'https://etch-a-sketch-eight-dun.vercel.app/',
    image: [etchASketch, etchASketch2, etchASketch3],
    description:
      'A browser-based Etch A Sketch project that mimics the classic toy, allowing users to draw on the screen using their mouse.',
    role: 'I built this as a solo project using HTML, CSS, and JavaScript.',
    stack: [htmlColored, cssColored, javacriptColored],
  },
  {
    title: 'To-Do List',
    year: '2023',
    link: 'https://zingy-otter-572368.netlify.app/',
    image: [todoList, todoList2],
    description:
      'A simple To-Do List application that helps users organize and track their tasks effectively.',
    role: 'I created this solo project using HTML, CSS, and JavaScript.',
    stack: [htmlColored, cssColored, javacriptColored],
  },
];

export default projectDetails;
