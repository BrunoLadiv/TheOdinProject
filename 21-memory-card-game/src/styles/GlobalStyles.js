import { createGlobalStyle} from 'styled-components'



const GlobalStyles = createGlobalStyle`
 
  html,body{
    font-family: 'Pixelify Sans', sans-serif;
    height: 100%;  
    background-color: black;
  }

  :root{
    --primary-text-color: yellow;
  }


`
export default GlobalStyles