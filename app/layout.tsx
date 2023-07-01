import { Plus_Jakarta_Sans } from 'next/font/google';
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

import Header from '@/components/Header/index';
import Providers from './Providers';

export const metadata = {
  title: 'Leadster',
  description: 'Transformando visitantes em clientes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className={jakarta.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
