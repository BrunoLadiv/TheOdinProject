import axios from "axios"

const baseUrl = "http://localhost:3000/api"

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
})

const getProducts = async () => {
  const response = await api.get("/products")
  return response
}

const postProduct = async (product) => {
  const response = await api.post("/products", product)
  return response
}

const updatedProduct = async (product) => {
  const response = await api.patch(`/products/${product.id}`, product)
  return response
}

const deleteProduct = async (product) => {
  const response = await api.delete(`/products/${product.id}`)
  return response
}

export { getProducts, postProduct, updatedProduct, deleteProduct }
