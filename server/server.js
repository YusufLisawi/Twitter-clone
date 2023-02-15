require("dotenv").config();
const colors = require("colors");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 3030;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to mongodb database
connectDB();
// Routes
app.use("/api/sessions", require("./routes/sessionRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
// Custom error handler middleware
app.use(errorHandler);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is listening on port ${port}`.green.bold);
  }
});
