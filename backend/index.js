const express = require("express");
const cors = require("cors"); // Import cors

const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS
app.use(cors()); // Use CORS middleware

// Basic GET endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js Backend!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
