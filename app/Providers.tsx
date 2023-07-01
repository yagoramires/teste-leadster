'use client';
import StyledComponentsRegistry from './registry';
import { GlobalStyle } from '@/styles/globals';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/theme';
import { VideosProvider } from '@/context/VideosContext';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <VideosProvider>{children}</VideosProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
