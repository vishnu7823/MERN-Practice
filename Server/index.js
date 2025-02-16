const express = require("express");
const dotenv = require("dotenv");
const cors =require('cors')
const database = require("./Models/Db");
const taskRoutes = require('./Routes/taskRoutes')

const app = express();

dotenv.config();
database();

app.use(express.json())
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});

app.use('/api/tasks',taskRoutes)
