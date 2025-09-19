// API routes for user management

const express = require('express');
const { registerUser, loginUser, getProfile } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware'); // Import the auth middleware
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getProfile); // This is the new, protected route

module.exports = router;
