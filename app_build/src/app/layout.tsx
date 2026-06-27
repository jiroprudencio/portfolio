import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jiro Prudencio | Data Scientist & Competitive Sprinter',
  description: 'Personal portfolio and athletic performance dashboard of Jiro Prudencio. Showcasing software engineering projects, data science workflows, and track progression.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-bg-deep text-text-primary min-h-screen flex flex-col font-sans selection:bg-accent/30 selection:text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
