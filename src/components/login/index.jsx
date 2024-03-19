import Grid from '@mui/material/Grid';
import * as React from 'react';
import CustomTextField from '../custom-textfield';
import CustomButton from '../custom-button';
import { Item } from '../mui/item';
import { useState } from 'react';
import axios from 'axios';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/user/login', {
                email: email,
                password1: password
            });
            console.log(response.data);
            alert(response.data)
        } catch (error) {
            console.log(error);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <Grid item marginTop={'50px'} xs={12} md={6} sx={{ textAlign: 'center' }} rowSpacing={4}>
            <Item>
                <h2 style={{ fontFamily: 'Bigelow Rules' }}>I already have an account</h2>
                <h3 style={{ fontFamily: 'Bigelow Rules' }}>Sign in with your email and password</h3>
            </Item>
            <Item>
                <CustomTextField id="email" name="email" value={email} label="Email" variant="filled" onChange={handleChange} />
            </Item>
            <Item>
                <CustomTextField id="password" name="password" value={password} label="Password" variant="filled" onChange={handleChange} />
            </Item>
            <Item>
                <CustomButton variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>SIGN IN</CustomButton>
            </Item>
        </Grid>
    );
}
