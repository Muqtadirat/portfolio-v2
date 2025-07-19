// import { StaticImageData } from 'next/image';
import { candourLogo, giriLogo, payritLogo, sheCodesLogo } from '@/assets';

interface HistoryProps {
  role: string;
  company: string;
  location: string;
  period: string;
  logo?: any;
}

const history: HistoryProps[] = [
  {
    role: 'Frontend Developer',
    company: 'GiriToday',
    location: 'Houston, United States',
    period: 'January 2025 - Present',
    logo: giriLogo,
  },
  {
    role: 'Frontend Developer',
    company: 'Candour IT Services',
    location: 'Lagos, Nigeria',
    period: 'April 2024 - Present',
    logo: candourLogo,
  },
  {
    role: 'Lead Frontend Developer',
    company: 'Payrit',
    location: 'Lagos, Nigeria',
    period: 'Dec 2023 - Present',
    logo: payritLogo,
  },
  {
    role: 'Frontend Developer',
    company: 'SheCodes',
    location: 'Remote',
    period: '2023',
    logo: sheCodesLogo,
  },
];

export default history;
