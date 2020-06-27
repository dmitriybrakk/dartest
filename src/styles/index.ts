import { css, createGlobalStyle } from 'styled-components';
import 'normalize.css';

const common = css`
    html {
        font-size: 10px;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
    }
    body {
        background-color: ${({ theme }) => theme.colors.pageBackground};
        padding: 0;
        margin: 0;
        min-height: 100vh;
        height: 100%;
    }
    body,
    button,
    input,
    label,
    select,
    td,
    textarea,
    p,
    span {
        color: ${({ theme }) => theme.colors.textColor};
        font-size: ${({ theme }) => theme.fonts.size};
        line-height: 1.5;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
`;

export const GlobalStyle = createGlobalStyle`
    ${common}
`;
