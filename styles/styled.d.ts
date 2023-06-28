import 'styled-components';

interface IDefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    light: string;
    dark: string;
    white: string;
    gray: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends IDefaultTheme {}
}
