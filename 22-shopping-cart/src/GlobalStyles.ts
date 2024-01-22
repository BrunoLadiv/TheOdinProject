import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  
  }

  :root {
    --primary: #fff;
    --secondary: #8046fd;
    --terceary: #d0bcff;
    --bg-color: #141218

  }

  body {
    background-color: var(--bg-color);
    color: white;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
    border-radius: 15px;
    &:hover{
      background-color: var(--terceary);
      cursor: grab;
    }
  }
`;
export default GlobalStyles;
