import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../scss/main.scss';
import Navbar from '@/components/Navbar';
import MouseLight from '@/components/client/MouseLight';
import { AppProvider } from '@/context';
import Footer from '@/components/client/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grind',
  description: 'Dummy portfolio site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppProvider>
          <Navbar />
          {children}
          <MouseLight />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
