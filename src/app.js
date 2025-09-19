// Main application file

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const initServer = require('./config/server');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');
const app = initServer();
connectDB();
app.get('/', (req, res) => {
    res.send('Welcome to the User Management API!');
});
app.use('/api/users', userRoutes);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));