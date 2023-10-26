import type { Metadata } from 'next';

import { App } from '@/src/app/app';

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
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
