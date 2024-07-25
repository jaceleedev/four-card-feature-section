import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  weight: ['200', '400', '600'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Four card feature section',
  description:
    'A responsive four card feature section built for a Frontend Mentor challenge.',
  generator: 'Next.js',
  applicationName: 'Four Card Feature Section',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Mentor Challenge',
    'Four card feature section',
    'Next.js',
    'Tailwind CSS',
    'Typescript',
  ],
  authors: [
    {
      name: 'jaceleedev',
      url: 'https://github.com/jaceleedev/four-card-feature-section.git',
    },
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    'https://four-card-feature-section-gold-three.vercel.app'
  ),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frontend Mentor | Four card feature section',
    description:
      'A responsive four card feature section built for a Frontend Mentor challenge.',
    url: 'https://four-card-feature-section-gold-three.vercel.app',
    siteName: 'Frontend Mentor | Four card feature section',
    images: [
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1571319220/Challenges/czhvpqpwrao3iao7f1cs.jpg',
        width: 900,
        height: 576,
        alt: 'Four card feature section desktop preview',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1571319220/Challenges/c1dszuwsuovywjupixlu.jpg',
        width: 500,
        height: 1813,
        alt: 'Four card feature section mobile preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mentor | Four card feature section',
    description:
      'A responsive four card feature section built for a Frontend Mentor challenge.',
    images: [
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1571319220/Challenges/czhvpqpwrao3iao7f1cs.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
