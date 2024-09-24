import { digittallyApp, payritWeb } from "@/assets/asset"
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
    title: 'Digit-tally accounting software',
    image: digittallyApp,
  },
];


export default projects