import { Inter, Montserrat, IBM_Plex_Serif } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['100', '300', '700'],
  variable: '--font-inter',
});
export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
export const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
});
