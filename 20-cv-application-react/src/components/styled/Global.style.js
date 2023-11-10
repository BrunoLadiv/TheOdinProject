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
  background-color: #EBECF0;
  
}



#root{
  letter-spacing: 0.4px;
  margin: 0px auto;
  min-height: 100%;
  width: 85%;
  display: flex;
  flex-wrap: wrap;
}
@media print {
  body {
    font-family: sans-serif;
    color: black;    
  }
  #root > section.sc-bdnyFh.dBekji{
    display: none;
  }
  #root > section.sc-bdnyFh.isqJgw > section > section.sc-bdnyFh.hwjNcH > div.MuiAvatar-root.MuiAvatar-circular.MuiAvatar-colorDefault.css-1vfbbup-MuiAvatar-root{
    display: none;
  }
  #root > section.sc-bdnyFh.isqJgw > section > section.sc-bdnyFh.hwjNcH{
    background-color: white;
  }

}

`

export default GlobalStyles
