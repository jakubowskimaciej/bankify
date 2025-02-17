import type { Metadata } from 'next';
import '@/app/globals.css';
import { inter, montserrat, ibmPlexSerif } from '@/components/ui/fonts';

export const metadata: Metadata = {
  title: 'Horizon Bank',
  description: 'Horizon is a modern banking platform for everyone',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} ${ibmPlexSerif.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
