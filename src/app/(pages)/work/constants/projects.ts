import {
  digittallyApp,
  digittallyPage,
  etchASketch,
  giriWeb1,
  payritWeb,
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
    title: 'GiriToday Landing Page',
    image: giriWeb1,
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
