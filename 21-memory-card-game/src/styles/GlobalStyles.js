import { createGlobalStyle} from 'styled-components'
import BgImage from '../assets/background-img.jpg'



const GlobalStyles = createGlobalStyle`
 
  html,body{
    font-family: 'Pixelify Sans', sans-serif;
    height: 100%;  
    margin: 0;
    border: 0;
  }
  body{
    background-image: url(${BgImage});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
  }

  :root{
    --primary-text-color: black; 
    --secondary-text-color: white;
  }


`
export default GlobalStyles