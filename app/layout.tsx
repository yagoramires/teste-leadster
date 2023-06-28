import StyledComponentsRegistry from './registry';
import { GlobalStyle } from '@/styles/globals';

import { Plus_Jakarta_Sans } from 'next/font/google';
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

import Header from '@/components/Header/index';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR' className={jakarta.className}>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <Header />
        {children}
      </StyledComponentsRegistry>
    </html>
  );
}
