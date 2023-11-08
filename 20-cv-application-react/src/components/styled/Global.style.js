import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}



body{
  height: 100vh;
  min-width: 100vw;
  background-color: black;
  
}




#root{
  
  margin: 0px auto;
  min-height: 100%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}
/* @media (max-width: 768px) {
    #root{
      min-width: 100vw;
    }
  } */

`

export default GlobalStyles
