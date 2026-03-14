import {
  digittallyApp,
  digittallyPage,
  digiWeb,
  etchASketch,
  giriStore1,
  giriWeb1,
  giriWebV,
  payritWeb,
  payritWebV,
  timesheet1,
  todoList,
} from '@/assets';
import { StaticImageData } from 'next/image';

interface ProjectProps {
  title: string;
  image: StaticImageData;
}

const projects: ProjectProps[] = [
  {
    title: 'Payrit Website V2',
    image: payritWebV,
  },
  {
    title: 'Digit-tally Landing Page V2',
    image: digiWeb,
  },
  {
    title: 'GiriToday Landing Page V2',
    image: giriWebV,
  },
  {
    title: 'Digit-tally Accounting Software',
    image: digittallyApp,
  },
  {
    title: 'GiriToday Storefront',
    image: giriStore1,
  },
  {
    title: 'Digit-tally Timesheet',
    image: timesheet1,
  },
  {
    title: 'Payrit Website',
    image: payritWeb,
  },
  {
    title: 'GiriToday Landing Page',
    image: giriWeb1,
  },
  {
    title: 'Digit-tally Landing Page',
    image: digittallyPage,
  },
  // {
  //   title: 'Etch A Sketch',
  //   image: etchASketch,
  // },
  // {
  //   title: 'To-Do List',
  //   image: todoList,
  // },
];

export default projects;
