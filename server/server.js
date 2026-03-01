import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 4000
const app = express();

await connectDB()

app.use(cors())

// ✅ Webhook route FIRST with raw body (FIXED)
app.use(
  '/api/user/webhooks',
  express.raw({ type: 'application/json' }),
  userRouter
)

// Normal JSON middleware for all other routes
app.use(express.json())

app.get('/', (req,res) => res.send("API Working"))
app.use('/api/user', userRouter)
app.use('/api/usetr', imageRouter)

app.listen(PORT, () => console.log('Server running on port ' + PORT));