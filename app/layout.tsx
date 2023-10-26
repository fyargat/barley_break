import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { App } from '@/src/app';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Barley Break',
  description: 'Description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
