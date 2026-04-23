import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// health check
app.get('/', (req, res) => {
  res.send('API running');
});

export default app;