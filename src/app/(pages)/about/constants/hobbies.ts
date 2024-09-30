import { StaticImageData } from 'next/image';
import { checker, console } from '@/assets/asset';

interface HobbiesProps {
  hobby: string;
  image: StaticImageData;
}

const hobbies: HobbiesProps[] = [
  {
    hobby: 'Art',
    image: checker,
  },
  {
    hobby: 'Gaming',
    image: console,
  },
];

export default hobbies;
