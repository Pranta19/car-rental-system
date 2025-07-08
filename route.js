const express = require('express');
const router = express.Router();

// In-memory storage (replace with DB later)
const users = [];

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const exists = users.find(u => u.username === username);
  if (exists) return res.status(400).json({ message: 'User already exists' });

  users.push({ username, password });
  res.json({ message: 'Registration successful' });
});

router.post('/signin', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  res.json({ message: 'Login successful' });
});

module.exports = router;
