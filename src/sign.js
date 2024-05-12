import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSign = async () => {
    try {
      const response = await axios.post(
        "mongodb+srv://brianmayoga:brianmayoga@cluster0.enablmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/?myapp/signup",
        {
          name,
          email,
          password,
        }
      );
      if (response.status === 201) {
        console.log(response.data);
        alert("Signup is successful");
      } else {
        console.log(response.data);
        alert("Signup failed. Please try again");
      }
    } catch (error) {
      console.error(error);
      alert("An error has occurred. Please try again");
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <TextField
        label="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          marginBottom: "10px",
          color: "white",
          backgroundColor: "white",
        }}
      />
      <TextField
        label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          marginBottom: "10px",
          color: "white",
          backgroundColor: "white",
        }}
      />
      <TextField
        label="password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        style={{
          marginBottom: "10px",
          color: "white",
          backgroundColor: "white",
        }}
      />
      <Button variant="contained" color="primary" onClick={handleSign}>
        Sign Up
      </Button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default Sign;
