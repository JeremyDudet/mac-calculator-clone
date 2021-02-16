import { createGlobalStyle } from 'styled-components';
import Roboto_Regular from './fonts/Roboto-Regular.ttf';
import Roboto_Thin from './fonts/Roboto-Thin.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto_Regular';
    src: url(${Roboto_Regular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto_Thin';
    src: url(${Roboto_Thin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: #fff;
    color: white;
    font-family: 'Roboto_Regular';
    font-size: 1.1rem;
  }
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export default GlobalStyle;