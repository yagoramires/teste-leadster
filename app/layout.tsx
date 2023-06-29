'use client';
import StyledComponentsRegistry from './registry';
import { GlobalStyle } from '@/styles/globals';

import { Plus_Jakarta_Sans } from 'next/font/google';
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

import Header from '@/components/Header/index';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className={jakarta.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <Header />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
