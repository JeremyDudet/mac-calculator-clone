import { createGlobalStyle } from 'styled-components';
import backgroundImage from './img/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg';
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
    font-family: 'Roboto_Regular';
    font-size: 1.1rem;
  }
  html {
    height: 100%;
    background: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
  }
  body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default GlobalStyle;
