import { useState } from "react"
import styled from "styled-components"

const EditForm = styled.div`
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  width: 400px;
  transform: translateY(-100px)
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px; 
`

const FormInput = styled.input`
  width: 95%;
  padding: 8px;
  margin-bottom: 10px;
`

const FormTextArea = styled.textarea`
  width: 95%;
  padding: 8px;
  margin-bottom: 10px;
  height: 148px;
  width: 379px;
  resize: none;
`

const FormButton = styled.button`
  padding: 6px 10px;
  margin-right: 5px;
`

export const DialogElement = styled.dialog`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0.801);
  display: flex;
  justify-content: center;
  align-items: center;
`
const mockup = {
  name: "iPhone 13",
  price: 999,
  category: "Phones",
  brand: "Apple",
  quantity: 10,
  description:
    "The latest iPhone model with a sleek new design and a powerful new processor.",
}

const Modal = ({ product = mockup, setEditDialogOpen, isEditing = false }) => {
  const initialProductState = isEditing
    ? product
    : {
        name: "",
        price: 0,
        category: "",
        brand: "",
        quantity: 0,
        description: "",
      }

  const [editedProduct, setEditedProduct] = useState(initialProductState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    // Handle save logic here, either editing existing product or creating a new one
    // For demonstration purposes, let's just log the edited product
    console.log(editedProduct)
    // Close the dialog
    setEditDialogOpen(false)
  }

  return (
    <DialogElement>
      <EditForm onSubmit={handleSave}>
        <h2>{isEditing ? "Edit Product" : "Create Product"}</h2>
        <form>
          <div>
            <FormLabel>Name:</FormLabel>
            <FormInput
              required
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel>Price:</FormLabel>
            <FormInput
              required
              type="text"
              name="price"
              value={editedProduct.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel>Category:</FormLabel>
            <FormInput
              required
              type="text"
              name="category"
              value={editedProduct.category}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel>Brand:</FormLabel>
            <FormInput
              required
              type="text"
              name="brand"
              value={editedProduct.brand}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel>Quantity:</FormLabel>
            <FormInput
              required
              type="number"
              name="quantity"
              value={editedProduct.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel>Description:</FormLabel>
            <FormTextArea
              required
              name="description"
              value={editedProduct.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormButton type="submit">
              {isEditing ? "Save" : "Create"}
            </FormButton>
            <FormButton
              onClick={(e) => {
                e.preventDefault()
                setEditDialogOpen(false)
              }}
            >
              Cancel
            </FormButton>
          </div>
        </form>
      </EditForm>
    </DialogElement>
  )
}

export default Modal
