import {
  digittallyApp,
  digittallyPage,
  etchASketch,
  giriStore1,
  giriWeb1,
  payritWeb,
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
    title: 'Payrit Website',
    image: payritWeb,
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
    title: 'GiriToday Landing Page',
    image: giriWeb1,
  },
  {
    title: 'Digit-tally Timesheet',
    image: timesheet1,
  },
  {
    title: 'Digit-tally Landing Page',
    image: digittallyPage,
  },
  {
    title: 'Etch A Sketch',
    image: etchASketch,
  },
  {
    title: 'To-Do List',
    image: todoList,
  },
];

export default projects;
