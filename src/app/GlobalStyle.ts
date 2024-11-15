import { createGlobalStyle, css } from 'styled-components';

const rootVariables = css`
  /* CSS variable   */
  :root {
    --color-blue1: #506fd9;
    --color-blue2: #445eb8;
    --color-blue3: #a8b7ec;
    --color-blue4: #a2d2e4;
    --color-blue5: #0dcaf0;
    --color-blue6: #31d2f2;
    --color-gray1: #595959;
    --color-gray2: #a1a8b0;
    --color-gray3: #303030;
    --color-gray4: #f1f3f4;
    --color-gray5: #41505f;
    --color-gray6: #ccd2da;
    --color-gray7: #f3f5f9;
    --color-gray8: #e2e5ec;
    --color-white: #ffffff;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${rootVariables};

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, span, pre {
    padding: 0;
    margin: 0;
    /* custom text style */
    word-wrap: break-word;
    word-break: keep-all;
  }

  /* table reset */
  table { 
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* table cell reset */
  th,td {
    margin: 0;
    padding: 0;
  }

  /* button reset */
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }

  /* input reset */
  input {
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
  
  /* list reset */
  ul, ol, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
