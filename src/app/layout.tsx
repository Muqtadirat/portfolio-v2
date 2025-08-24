import type { Metadata } from 'next';
import './globals.css';
import Layout from './layout/Index';
import { Toaster } from 'sonner';
import { CustomCursor } from '@/components';

export const metadata: Metadata = {
  title: 'Muqtadirat Yussuff | Frontend Developer',
  description:
    "Muqtadirat Yussuff's frontend developer portfolio showcasing expertise in HTML, CSS, JavaScript, React, and more. Discover projects, skills, and experience in creating responsive and dynamic web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
      </head>
      <body className={`font-roboto`}>
        <Toaster position="top-center" richColors closeButton />
        <Layout>
          <CustomCursor />
          {children}
        </Layout>
      </body>
    </html>
  );
}
