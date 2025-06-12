import express from 'express';
import cors from 'cors';
import { loadRoutes } from './route';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Load routes
app.use('/api', loadRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/url-shortener';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});