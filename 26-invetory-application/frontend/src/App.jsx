import styled from "styled-components"
import Sidebar from "./components/Sidebar"

const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  width: 85%;
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
`

function App() {
  return (
    <MaxWidthWrapper>
      <Sidebar />
    </MaxWidthWrapper>
  )
}

export default App
