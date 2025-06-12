import express from 'express';
import cors from 'cors';
import { loadRoutes } from './route';

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});