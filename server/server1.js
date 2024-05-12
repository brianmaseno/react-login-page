const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/my-signup-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create a user model
const User = mongoose.model('User', userSchema);

// API endpoint for signup
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API endpoint for login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// /**
//  * Creates an Express application instance.
//  */
// const app = express();
// app.use(express.json());
// /**
//  * Configures the Express application with middleware for parsing JSON request bodies and enabling CORS.
//  */
// app.use(cors());
// /**
//  * Configures the Express application with middleware for parsing JSON request bodies and enabling CORS.
//  */
// /**
//  * Connects to the 'signup' database in the local MongoDB instance.
//  * This establishes a connection to the database that will be used for user signup functionality.
//  */
// /**
//  * Connects the application to a MongoDB database running on the local machine.
//  * This connection is used to interact with the user collection in the database.
//  */
// /**
//  * Connects to a MongoDB database hosted on the local machine.
//  * The database name is "signn".
//  * This connection is used to interact with the user data stored in the MongoDB database.
//  */
// mongoose.connect("mongodb://localhost/sign-up", 
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
// });
// /**
//  * Defines a schema for the user collection in the MongoDB database.
//  * This schema specifies the structure of user documents, including the fields for name, email, and password.
//  */
// const User = mongoose.model('User',userSchema);
// /**
//  * Defines a model for the user collection based on the user schema.
//  * This model provides an interface for interacting with user documents in the database.
//  */
// /**
//  * Defines a POST endpoint for user signup.
//  * This endpoint receives signup requests with user details in the request body.
//  * It checks if a user with the provided email already exists, creates a new user document, and saves it to the database.
//  * The endpoint returns a success message if the user is created successfully or an error message if an error occurs.
//  */
// app.post('/signup', async (req, res) => {
//     const {name,email,password} = req.body;

//     try {
//         const existingUser = await User.findOne({email});
//         if(existingUser){
//             return res.status(400).json({error:'User already exists'});
//         }

//         const newUser = new User({name,email,password});
//         await newUser.save();
//         res.status(201).json({message: 'User created successfully'});

//     } catch (error) {
//         res.status(500).json({error:'Internal server error '});
        
//     }
// });
// /**
//  * Defines a POST endpoint for user signup.
//  * This endpoint receives signup requests with user details in the request body.
//  * It checks if a user with the provided email already exists, creates a new user document, and saves it to the database.
//  * The endpoint returns a success message if the user is created successfully or an error message if an error occurs.
//  */
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, ()=>{
//     console.log(`Server is running on port ${PORT}`);
// });

