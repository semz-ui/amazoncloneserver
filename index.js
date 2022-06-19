const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
// const router = require("./routes/router");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/store", require("./routes/storeRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on ${port}`.yellow.underline);
});
