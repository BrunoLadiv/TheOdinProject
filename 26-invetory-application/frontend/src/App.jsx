import styled from "styled-components"
import Header from "./components/Header"
import ProductsTable from "./components/ProductsTable"
import EditDialog from "./components/EditDialog"
import { useState } from "react"
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
        <ProductsTable />
      </MaxWidthWrapper>
    </>
  )
}

export default App
