import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'PUREiron — Forged for the Relentless',
    template: '%s | PUREiron',
  },
  description:
    'Premium gym and athletic clothing forged for those who never quit. Performance hoodies, joggers, training gear, and accessories built to withstand your hardest sessions.',
  keywords: ['gym clothing', 'athletic wear', 'workout clothes', 'gym hoodies', 'training gear', 'PUREiron'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'PUREiron',
    title: 'PUREiron — Forged for the Relentless',
    description: 'Premium gym and athletic clothing forged for those who never quit.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PUREiron — Forged for the Relentless',
    description: 'Premium gym and athletic clothing forged for those who never quit.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${oswald.variable} ${inter.variable} antialiased`}>
        <CartProvider>
          <Header />
          <PageTransition>
            <main className="min-h-screen">{children}</main>
          </PageTransition>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
