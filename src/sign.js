import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const Sign = ()=> {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const handleSign = async () => {
        try {
            const response = await axios.post('http://localhost:5000/signup',
        {name,email,password});
        if (response.status ===201){
            console.log(response.data);
            alert('signup is successful');
        }
        else {
            console.log(response.data);
            alert('signup failed. Please try again');
        }

        } catch (error) {
            console.error(error);
            alert('An error has occured please try again');
        }
    };

    return(
        <div>
            <TextField label="name" 
            value={name} 
            onChange={(e)=>setName(e.target.value)}
            />
            <TextField label="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField label="password"
             value={password}
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <Button
            variant="contained"
            color="blue"
            onClick={handleSign}
            >
                Sign Up
                </Button>
                
                
        </div>
    );
};
export default Sign;