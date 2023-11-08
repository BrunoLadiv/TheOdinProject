import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}



body{
  height: 100vh;
  width: 100vw;
  background-color: black;
  
}




#root{
  
  margin: 0px auto;
  min-height: 100%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}
`

export default GlobalStyles
