import express from 'express'
import dotenv from 'dotenv'
import moongose from 'mongoose'
import authRoutes from './routes/auth.js'


dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

//db connect
moongose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = moongose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('MongoDB connected successfully')
})

app.use(express.json())

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
