const express = require('express');
const { connectToDatabase } = require('./utils/db');
const app = express();
const port = process.env.PORT || 5000

const businessRouter = require('./routes/business.routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectToDatabase();

app.use('/businesses', businessRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
