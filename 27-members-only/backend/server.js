import express from 'express'
import dotenv from 'dotenv'
import moongose from 'mongoose'
import authRoutes from './routes/authRoutes.js'
import postsRoutes from './routes/postsRoutes.js'
import cors from 'cors'

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
const whitelist = ['http://localhost:3000', 'http://127.0.0.1:5173'] 

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}

app.use(express.json())
app.use(cors(corsOptions))

app.use('/api/auth', authRoutes)
app.use('/api/posts', postsRoutes)
app.use('*', (req, res) => {
  res.status(404).send('404 Page Not found')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
