import styled from "styled-components"
import { useState } from "react"
// import EditDialog from "./EditDialog"
import DeleteDialog from "./DeleteDialog"
import Modal from "./Modal"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getProducts } from "../services/api"

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ddd;
  font-size: 1.3rem;
`

const TableRow = styled.tr`
  background-color: #cfcfd1dc;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`

const TableHeader = styled.th`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`

const Button = styled.button`
  padding: 6px 10px;
  margin-right: 5px;
`

const ProductsTable = () => {
  const { isLoading, data: products, error } = useQuery("products", getProducts)

  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const handleEdit = (productId) => {
    console.log(`Edit product with ID: ${productId}`)
    setEditDialogOpen(true)
  }

  const handleDelete = (productId) => {
    setDeleteDialogOpen(true)
    console.log(`Delete product with ID: ${productId}`)
  }
  if (isLoading) return "Loading..."
  if (error) return "Error loading products"
  console.log(products)
  return (
    <>
      {deleteDialogOpen && (
        <DeleteDialog setDeleteDialogOpen={setDeleteDialogOpen} />
      )}
      {editDialogOpen && (
        <Modal setEditDialogOpen={setEditDialogOpen} isEditing={true} />
      )}

      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Category</TableHeader>
            <TableHeader>Brand</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>ID</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {products.data.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.id}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(product.id)}>Edit</Button>
                <Button onClick={() => handleDelete(product.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default ProductsTable
