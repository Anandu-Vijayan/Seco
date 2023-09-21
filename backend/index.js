const express = require('express');
const dotenv = require('dotenv');
const connectDB  = require('./config/db'); // Use require for CommonJS modules
const cors = require('cors');
const dataUsers = require('../backend/routers/dataUser')

// Define your route handler or import it here if it's in a separate file
// const dataUsers = require('./routes/dataUsers');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());
 
// Use your route handler here
app.use('/',dataUsers);

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
