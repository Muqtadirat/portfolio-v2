import { EmailIcon, GithubIcon, LinkedinIcon } from '@/assets/asset';
import Form from '../components/Form';
import Link from 'next/link';
import { useState } from 'react';

interface IconProps {
  fill: string;
}

interface SocialsProps {
  href: string;
  Icon: React.FC<IconProps>;
}

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socials: SocialsProps[] = [
    {
      href: 'mailto:muqtadirat.yussuff.it@gmail.com',
      Icon: EmailIcon,
    },
    {
      href: 'https://www.linkedin.com/in/muqtadirat-yussuff',
      Icon: LinkedinIcon,
    },
    {
      href: 'https://github.com/Muqtadirat',
      Icon: GithubIcon,
    },
  ];

  return (
    <footer id='contact' className="px-6 lg:px-12 pb-12 pt-8 lg:pb-16 lg:pt-12">
      <Form />

      <section className="lg:px-[3.75rem] mt-10 lg:mt-32 flex justify-between font-medium lg:text-[2rem] uppercase">
        <h4>Muqtadirat Yussuff</h4>
        <h4>Frontend Developer</h4>
        <div className="flex gap-5 items-center">
          {socials.map(({ href, Icon }, index) => {
            const isEmail = href.startsWith('mailto:');

            return isEmail ? (
              <a
                href={href}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Icon fill={hoveredIndex === index ? '#979999' : '#141414'} />
              </a>
            ) : (
              <Link
                href={href}
                key={index}
                target="_blank"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Icon fill={hoveredIndex === index ? '#979999' : '#141414'} />
              </Link>
            );
          })}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
