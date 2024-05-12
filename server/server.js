const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://brianmayoga:brianmayoga@cluster0.enablmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/?myapp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Function to check MongoDB connection status
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB:", err);
});

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create a user model
const User = mongoose.model("Students", userSchema);

// API endpoint for signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
