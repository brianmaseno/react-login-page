import React, { useState } from "react";
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = async () => {
        try {
          const response = await axios.post('http://localhost:5000/signup', {
            name,
            email,
            password,
          });
      
        //   if (response.status === 201) {
        //     console.log(response.data); // Log the response from the server
        //     // Add logic to handle successful signup
        //     // toast.success('Signup successful!', {
        //     //   position: 'top-center',
        //     //   autoClose: 9000, // Close the notification after 3 seconds
        //     //   hideProgressBar: true,
        //     //   closeOnClick: true,
        //     //   pauseOnHover: true,
        //     //   draggable: true,
        //     // });
        //   }
          
          if (response.status === 201) {
            // Successful signup
            console.log(response.data); // Log the response from the server
            // Add logic to handle successful signup
            alert('Signup successful!'); // Display a success message
          }

        


           else {
            // Handle other response statuses
            console.log(response.data); // Log the response from the server
            // Add logic to handle other response statuses

            
             alert('Signup failed. Please try again.'); // Display an error message
          }
        } catch (error) {
          console.error(error); // Log any errors
          // Add logic to handle errors
          
           alert('An error occurred. Please try again.'); // Display an error message
        }
      };
      
  
    return (
      <div>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </div>
    );
};

export default SignupPage;
