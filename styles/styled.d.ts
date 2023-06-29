import 'styled-components';

interface IDefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    bluelink: string;
    light: string;
    dark: string;
    white: string;
    gray: string;
    gray200: string;
    gray400: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends IDefaultTheme {}
}
