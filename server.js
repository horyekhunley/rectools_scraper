const express = require('express');
const { connectToDatabase } = require('./db');
const { createBusiness, getAllBusinesses } = require('./business.controller');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectToDatabase();

app.post('/businesses', createBusiness);

app.get('/businesses', getAllBusinesses);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
