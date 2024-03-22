import express from 'express'
import mongoose from 'mongoose'
import productsRoute from './routes/productsRoute.js'
import cors from 'cors'

// Create an express app from 'mongoose'

const app = express()
const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err)
  })

// Middleware

app.use(express.json())
app.use(cors())
app.use('/api/products', productsRoute)

// Routes

// Home route

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
