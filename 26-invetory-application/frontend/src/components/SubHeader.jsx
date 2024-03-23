import styled from "styled-components"
import Modal from "./Modal"
import { useState } from "react"
const SubHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  & > button {
    padding: 5px;
  }
  & label {
    font-size: 1.2rem;
    margin-right: 1rem;
  }
`
export default function SubHeader() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  return (
    <SubHeaderWrapper>
      {deleteDialogOpen && <Modal setEditDialogOpen={setDeleteDialogOpen} />}
      <button onClick={() => setDeleteDialogOpen(true)}>Add new Product</button>
    </SubHeaderWrapper>
  )
}
