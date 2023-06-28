'use client';
import { GlobalStyle } from '../styles/globals.js';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

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
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
