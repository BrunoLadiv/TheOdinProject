import styled from "styled-components"
import { useState } from "react"
// import EditDialog from "./EditDialog"
import DeleteDialog from "./DeleteDialog"
import Modal from "./Modal"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getProducts, updatedProduct } from "../services/api"

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
  width: ${(props) => props.width || "fit-content"};
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
  const [currentProduct, setCurrentProduct] = useState(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const categories = products
    ? [...new Set(products.data?.map((product) => product.category))]
    : ""

  const handleDelete = (productId) => {
    setDeleteDialogOpen(true)
    console.log(`Delete product with ID: ${productId}`)
  }
  if (isLoading) return "Loading..."
  if (error) return "Error loading products"
  return (
    <>
      {deleteDialogOpen && (
        <DeleteDialog setDeleteDialogOpen={setDeleteDialogOpen} />
      )}
      {editDialogOpen && (
        <Modal
          setEditDialogOpen={setEditDialogOpen}
          product={currentProduct}
          isEditing={true}
        />
      )}

      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader width="250px">
              Category
              <select
                style={{ marginLeft: "30px" }}
                value={selectedCategory}
                name="category"
                defaultValue={"All"}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All</option>
                {categories &&
                  categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </TableHeader>
            <TableHeader>Brand</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>ID</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {products.data.filter(product => {
            if (selectedCategory === "All") return true
            return product.category === selectedCategory
          }).map((product) => (
            <TableRow key={product._id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell title={product._id}>{product._id.slice(-5)}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setCurrentProduct(product)
                    setEditDialogOpen(true)
                  }}
                >
                  Edit
                </Button>
                <Button onClick={() => handleDelete(product._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default ProductsTable
