import styled from "styled-components"
import Header from "./components/Header"

const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
`

function App() {
  return (
    <MaxWidthWrapper>
      <Header />
    </MaxWidthWrapper>
  )
}

export default App
