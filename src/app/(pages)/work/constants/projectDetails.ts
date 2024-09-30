import {
  cssColored,
  cypressColored,
  digittallyApp,
  digittallyApp2,
  digittallyPage,
  digittallyPage2,
  digittallyPage3,
  etchASketch,
  etchASketch2,
  etchASketch3,
  htmlColored,
  javacriptColored,
  nextJsColored,
  payritWeb,
  payritWeb2,
  reactQueryColored,
  reduxColored,
  tailwindColored,
  todoList,
  todoList2,
  typescriptColored,
} from '@/assets/asset';
import { StaticImageData } from 'next/image';

interface ProjectDetailsProps {
  role: string;
  year: string;
  link: string;
  title: string;
  description: string;
  image: StaticImageData[];
  stack: StaticImageData[];
}

const projectDetails: ProjectDetailsProps[] = [
  {
    title: 'Payrit Website',
    year: '2023',
    link: 'https://www.payrit.com/',
    image: [payritWeb, payritWeb2],
    description:
      'Payrit is a payment service that offers the fastest, safest, and most complete personal and business financial services.',
    role: 'I worked as the sole frontend developer using Next.js, Typescript, and Tanstack Query.',
    stack: [typescriptColored, tailwindColored, nextJsColored],
  },
  {
    title: 'Digit-tally Accounting Software',
    year: '2024',
    link: 'https://app.digit-tally.io/',
    image: [digittallyApp, digittallyApp2],
    description:
      'Digit-tally is an accounting software for small, medium, and large enterprises. It allows businesses to manage invoices, receipts, credit notes, sales, and taxes.',
    role: 'I worked as a frontend engineer in a team of 3, focusing on the internal dashboard. I collaborated with the product design team, using Next.js, Typescript, and Tanstack Query.',
    stack: [
      typescriptColored,
      reactQueryColored,
      reduxColored,
      tailwindColored,
      cypressColored,
      nextJsColored,
    ],
  },
  {
    title: 'Digit-tally Landing Page',
    year: '2024',
    link: 'https://digit-tally-landing-page.vercel.app/',
    image: [digittallyPage, digittallyPage2, digittallyPage3],
    description:
      'The landing page for Digit-tally, an accounting software that helps businesses manage invoices, receipts, credit notes, sales, and taxes.',
    role: 'I collaborated with a team of 2 frontend engineers to build the landing page using Next.js, JavaScript, and Tailwind CSS.',
    stack: [javacriptColored, tailwindColored, nextJsColored],
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
