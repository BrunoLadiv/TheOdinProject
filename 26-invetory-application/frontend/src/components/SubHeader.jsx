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
      <div>
        <label htmlFor="category">Categories:</label>
        <select id="category" name="category">
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>
      <button onClick={() => setDeleteDialogOpen(true)}>Add new Product</button>
    </SubHeaderWrapper>
  )
}
