import { StaticImageData } from 'next/image';
import { anime, art, books, checker, console } from '@/assets';

interface HobbiesProps {
  hobby: string;
  image: StaticImageData;
}

const hobbies: HobbiesProps[] = [
  {
    hobby: 'Art',
    image: art,
  },
  {
    hobby: 'Gaming',
    image: console,
  },
  {
    hobby: 'Anime',
    image: anime,
  },
  {
    hobby: 'Reading',
    image: books,
  },
];

export default hobbies;
