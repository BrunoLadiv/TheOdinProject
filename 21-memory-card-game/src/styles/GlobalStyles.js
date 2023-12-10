import { createGlobalStyle } from "styled-components";
import BgImage from "../assets/background-img.jpg";

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    border: 0;
  }
  html,body,#root{
    font-family: 'Pixelify Sans', sans-serif;
    height: 100%;  
  }
  body{
    background-image: url(${BgImage});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-attachment: fixed;
  }

  :root{
    --primary-text-color: black; 
    --secondary-text-color: white;
  }


`;
export default GlobalStyles;
