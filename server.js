const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jobRoutes = require('./routes/jobRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// API Routes
app.use('/api/jobs', jobRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
