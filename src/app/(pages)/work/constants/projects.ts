import { digittallyApp, etchASketch, payritWeb, todoList } from "@/assets/asset"
import { StaticImageData } from "next/image";

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
    title: 'Digit-tally Landing Page',
    image: digittallyApp,
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


export default projects