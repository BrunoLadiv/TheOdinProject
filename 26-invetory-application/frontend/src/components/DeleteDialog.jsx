import styled from "styled-components"
import { DialogElement } from "./Modal"
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
export default function DeleteDialog({ setDeleteDialogOpen }) {
  return (
    <DialogElement>
      <DeleteForm>
        <h2>Action requeries password</h2>
        <input type="password" />
        <ButtonContainer>
          <button>Delete</button>
          <button onClick={() => setDeleteDialogOpen(false)}>Cancel</button>
        </ButtonContainer>
      </DeleteForm>
    </DialogElement>
  )
}
