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
    role: 'Lead Frontend Developer',
    company: 'Payrit',
    location: 'Lagos, Nigeria',
    period: 'Dec 2023 - Present',
    logo: payritLogo,
  },
  {
    role: 'Mid Frontend Developer',
    company: 'Candour IT Services',
    location: 'Lagos, Nigeria',
    period: 'April 2024 - May 2026',
    logo: candourLogo,
  },
  {
    role: 'Frontend Developer',
    company: 'GiriToday',
    location: 'Remote, United States',
    period: 'January 2025 - Present',
    logo: giriLogo,
  },
  {
    role: 'Volunteer Frontend Developer',
    company: 'Winnov8',
    location: 'Remote',
    period: 'Nov 2023 - Feb 2024',
    // logo: sheCodesLogo,
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
