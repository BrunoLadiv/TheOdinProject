import styled from "styled-components"
import { DialogElement } from "./Modal"
import { useMutation, useQueryClient } from "react-query"
import { deleteProduct } from "../services/api"
import { useState } from "react"
const DeleteForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-150px);
  & > div {
    margin-top: 10px;
  }
  & > h2 {
    margin: 0 0 10px 0;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`
export default function DeleteDialog({ setDeleteDialogOpen, productDltID }) {
  const queryClient = useQueryClient()
  const [password, setPassword] = useState("")

  const deleteProductMutation = useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products")
      setDeleteDialogOpen(false)
    },
  })
  function handleDelete(e) {
    e.preventDefault()
    const productToDelete = {
      id: productDltID,
      password,
    }
    deleteProductMutation.mutate(productToDelete)
  }
  return (
    <DialogElement>
      <DeleteForm onSubmit={handleDelete}>
        <h2>Action requeries password</h2>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        {deleteProductMutation.isLoading && <p>Loading...</p>}
        {deleteProductMutation.isError && (
          <p style={{color: "red"}}>Wrong password</p>
        )}
        <ButtonContainer>
          <button>Delete</button>
          <button onClick={() => setDeleteDialogOpen(false)}>Cancel</button>
        </ButtonContainer>
      </DeleteForm>
    </DialogElement>
  )
}
