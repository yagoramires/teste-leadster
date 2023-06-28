'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }

    ul, ol {
        list-style: none
    }

    button {
        cursor:pointer;
        background: transparent;
        border: 0;
    }

`;
