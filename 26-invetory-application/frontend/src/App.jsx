import styled from "styled-components"
import Header from "./components/Header"
import ProductsTable from "./components/ProductsTable"
import SubHeader from "./components/SubHeader"
const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <>
      <MaxWidthWrapper>
        <Header />
        <SubHeader />
        <ProductsTable />
      </MaxWidthWrapper>
    </>
  )
}

export default App
