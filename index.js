const express = require('express');
const mongoose = require('./Schema.js')

const app = express();

require('dotenv').config(); 


app.use(express.json());

const PORT = process.env.PORT || 3001;



app.get('/', (req, res) => {
  res.send('server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});