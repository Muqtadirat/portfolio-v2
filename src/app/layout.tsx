import type { Metadata } from 'next';
import './globals.css';
import Layout from './layout/Index';
import { Toaster } from 'sonner';
import { CustomCursor, PostHogProvider, ThemeProvider } from '@/components';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Muqtadirat Yussuff | Frontend Developer',
  description:
    "Muqtadirat Yussuff's frontend developer portfolio showcasing expertise in HTML, CSS, JavaScript, React, and more. Discover projects, skills, and experience in creating responsive and dynamic web applications.",
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`font-roboto`}>
        <PostHogProvider>
          <ThemeProvider>
            <Toaster position="top-center" richColors closeButton />
            <Layout>
              <CustomCursor />
              {children}
              <Analytics />
            </Layout>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
