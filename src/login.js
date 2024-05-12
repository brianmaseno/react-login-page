import React, { useState } from 'react';
import axios from 'axios';
import { Button, Link, TextField } from '@material-ui/core';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (response.status === 200) {
        console.log(response.data);
        alert("Login successful");
      } else {
        console.log(response.data);
        alert("Login failed. Please check your credentials");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: "10px", color: "white" ,backgroundColor: "white"}}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "10px", color: "white" ,backgroundColor: "white"}}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      <Link to="/signup" style={{ color: "white" }}>
        Don't have an account? Sign up
      </Link>

      <Link to="/forgot-password" style={{ color: "white" }}>
        Forgot password?
        </Link>
    </div>
  );
};

export default Login;
