import styled from "styled-components"
import Header from "./components/Header"
import ProductsTable from "./components/ProductsTable"
import SubHeader from "./components/SubHeader"
import { useState } from "react"
const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {
  const [searchText, setSearchText] = useState("")
  return (
    <>
      <MaxWidthWrapper>
        <Header setSearchText={setSearchText} searchText={searchText} />
        <SubHeader />
        <ProductsTable searchText={searchText} setSearchText={setSearchText} />
      </MaxWidthWrapper>
    </>
  )
}

export default App
