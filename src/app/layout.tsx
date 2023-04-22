import { Inter, Press_Start_2P } from 'next/font/google';

import clsx from 'clsx';

import './styles/_globals.scss';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const pressStart2p = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
});

export const metadata = {
  title: 'Alex Newhouse | Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fonts = clsx(pressStart2p.variable, inter.variable);

  return (
    <html lang="en">
      <body className={fonts}>
        <nav style={{ height: '4rem' }}>Nav goes here</nav>
        {children}
      </body>
    </html>
  );
}
