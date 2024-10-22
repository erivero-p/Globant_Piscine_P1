const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// import dotenv from 'dotenv';
// dotenv.config();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});