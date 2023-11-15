require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRoute');
// const notFoundMiddleware = require("./middleware/not-found");
// const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes

app.use('/api', mainRouter);
// // products route

// app.use(notFoundMiddleware);
// app.use(errorMiddleware);

const port = process.env.PORT;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
