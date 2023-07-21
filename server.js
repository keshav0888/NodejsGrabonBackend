const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");
const cors = require('cors');
const app = express();
connectDb();
app.use(express.json());
app.use(cors());
app.use("/api/data", require("./routes/dataRoutes.js"));
app.use("/api/user", require("./routes/userRoutes.js"));
app.use(errorHandler);
app.listen(3001, () => {
  console.log(`Server running on port 3001`);
});
