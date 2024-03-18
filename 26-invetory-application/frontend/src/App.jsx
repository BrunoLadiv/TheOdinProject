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
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  return (
    <>
      <MaxWidthWrapper>
        <Header />
        <ProductsTable setEditDialogOpen={setEditDialogOpen} />
      </MaxWidthWrapper>
      {editDialogOpen && <EditDialog setEditDialogOpen={setEditDialogOpen} />}
    </>
  )
}

export default App
