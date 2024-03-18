import styled from "styled-components"
const products = [
  {
    id: "1",
    name: "iPhone 11",
    price: 699.99,
    category: "Smartphones",
    brand: "Apple",
  },
  {
    id: "2",
    name: "Samsung Galaxy S20",
    price: 899.99,
    category: "Smartphones",
    brand: "Samsung",
  },
  {
    id: "3",
    name: "Google Pixel 5",
    price: 699.99,
    category: "Smartphones",
    brand: "Google",
  },
  {
    id: "4",
    name: "Sony PlayStation 5",
    price: 499.99,
    category: "Gaming Consoles",
    brand: "Sony",
  },
  {
    id: "5",
    name: "Microsoft Xbox Series X",
    price: 499.99,
    category: "Gaming Consoles",
    brand: "Microsoft",
  },
  {
    id: "6",
    name: "MacBook Air",
    price: 999.99,
    category: "Laptops",
    brand: "Apple",
  },
  {
    id: "7",
    name: "Dell XPS 13",
    price: 1199.99,
    category: "Laptops",
    brand: "Dell",
  },
  {
    id: "8",
    name: "LG OLED CX Series",
    price: 1499.99,
    category: "Televisions",
    brand: "LG",
  },
  {
    id: "9",
    name: "Bose QuietComfort 35 II",
    price: 299.99,
    category: "Headphones",
    brand: "Bose",
  },
  {
    id: "10",
    name: "Canon EOS Rebel T7i",
    price: 699.99,
    category: "Cameras",
    brand: "Canon",
  },
]

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
  const handleEdit = (productId) => {
    console.log(`Edit product with ID: ${productId}`)
  }

  const handleDelete = (productId) => {
    console.log(`Delete product with ID: ${productId}`)
  }

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Category</TableHeader>
          <TableHeader>Brand</TableHeader>
          <TableHeader>ID</TableHeader>
          <TableHeader>Actions</TableHeader>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>${product.price.toFixed(2)}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.brand}</TableCell>
            <TableCell>{product.id}</TableCell>
            <TableCell>
              <Button onClick={() => handleEdit(product.id)}>Edit</Button>
              <Button onClick={() => handleDelete(product.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  )
}

export default ProductsTable
