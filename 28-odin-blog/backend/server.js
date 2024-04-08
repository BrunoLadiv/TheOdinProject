import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/authRouter.js'
import postsRouter from './routes/postsRouter.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/posts', postsRouter)

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
