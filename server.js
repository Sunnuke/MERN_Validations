// Import/Install Express & cors
const express = require("express");
const cors = require("cors");

// Set Express to a variable (app), and set the selected port to a variable(port), this part is Optional.
const app = express();
const port = 8000;

// Import config file
require("./server/config/mongoose.config");

// Use "app.use()" with cors(), and express: .json() and .urlencoded({extended: true})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Import routes file and address app
require("./server/routes/product.routes")(app);

// Set app to listen for selected port and console.log a message to verify connectivity
app.listen(port, () => console.log(`server.js: Listening to port ${port}`));