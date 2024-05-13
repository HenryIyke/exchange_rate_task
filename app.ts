import express from 'express';
import bodyparser from 'body-parser';
import { userRoutes } from './routes/userRoutes';
import { currencyRoutes } from './routes/currencyRoutes';

// Initialize Express app
const app = express();
const PORT = 4000;

// Middleware to parse JSON bodies
app.use{bodyParser.json()};

//mounting routes
app.use('/users', userRoutes);
app.use('/currencies', currencyRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
})