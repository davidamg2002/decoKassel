const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoute"));
app.use("/api/goals", require("./routes/goalRoute"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
