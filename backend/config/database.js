// Importing the Mongoose library
const mongoose = require("mongoose");

// Importing and configuring environment variables
require("dotenv").config();

// Defining a function to connect to the database
const dbConnect = () => {
  // Log the database URL to check it's correctly loaded
  console.log("Attempting to connect to:", process.env.DATABASE_URL);

  mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB CONNECTION SUCCESS"))
    .catch((err) => {
      console.log(`DB CONNECTION ISSUES`);
      console.error("Error Message:", err.message);
      console.error("Error Stack:", err.stack);
      process.exit(1);
    });
};

// Exporting the dbConnect function for use in other files
module.exports = dbConnect;
