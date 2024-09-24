import {
  digittallyApp,
  digittallyApp2,
  payritWeb,
  payritWeb2,
} from '@/assets/asset';
import { StaticImageData } from 'next/image';

interface ProjectDetailsProps {
  role: string;
  year: string;
  link: string;
  title: string;
  description: string;
  image: StaticImageData[];
}

const projectDetails: ProjectDetailsProps[] = [
  {
    title: 'Payrit Website',
    year: '2023',
    link: 'https://www.payrit.com/',
    image: [payritWeb, payritWeb2],
    description:
      'Payrit is a payment service that offers the fastest, safest, most fun and complete personal and business financial services.',
    role: 'I worked as the sole frontend developer Next.js, Typescript and Tanstack query. .',
  },
  {
    title: 'Digit-tally accounting software',
    year: '2024',
    link: 'https://app.digit-tally.io/',
    image: [digittallyApp, digittallyApp2],
    description:
      'Digit-tally is an accounting software for small, medium and large enterprises.The product allows these businesses manage their invoices, receipts and credit notes, allows them manage sales and taxes.',
    role: 'I worked with a team of 3 frontend engineers using Next.js, Typescript and Tanstack query. I also worked closely with the product design team. I was tasked primarily with the internal dashboard that was used to do this and that and more of this and that.',
  },
];

export default projectDetails;
