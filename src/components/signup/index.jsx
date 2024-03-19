import { Component } from "react";
import CustomButton from "../custom-button";
import CustomTextField from "../custom-textfield";
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { Item } from "../mui/item";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            email: "",
            password1: "",
            password2: ""
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event)
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { userName, email, password1, password2 } = this.state;
        if (password1 !== password2) {
            alert("Passwords do not match.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8000/user/registration', {
                userName: this.state.userName,
                email: this.state.email,
                password1: this.state.password1,
                password2: this.state.password2
            });
            console.log(response.data);
            alert("Successfully registered");
        } catch (error) {
            console.log(error);
            alert("Registration failed. Please try again.");
        }
    };

    render() {
        return (
            <>
                <Grid item xs={12} md={6} marginTop={'50px'}>
                    <form onSubmit={this.handleSubmit}>
                        <Grid>
                            <Item>
                                <h2 style={{ fontFamily: 'Bigelow Rules' }}>I don't have an account</h2>
                                <h4 style={{ fontFamily: 'Bigelow Rules' }}> Sign up with email and password</h4>
                                <CustomTextField id="userName" label="User Name" variant="filled" name="userName" onChange={this.handleChange} value={this.state.userName} />
                            </Item>
                        </Grid >
                        <Grid>
                            <Item>
                                <CustomTextField id="email" label="Email" variant="filled" name="email" onChange={this.handleChange} value={this.state.email} />
                            </Item>
                        </Grid>
                        <Grid>
                            <Item>
                                <CustomTextField id="password1" label="Password" variant="filled" name="password1" type="password" onChange={this.handleChange} value={this.state.password1} />
                            </Item>
                        </Grid>
                        <Grid>
                            <Item>
                                <CustomTextField id="password2" label="Confirm Password" variant="filled" name="password2" type="password" onChange={this.handleChange} value={this.state.password2} />
                            </Item>
                        </Grid>
                        <Grid>
                            <Item>
                                <CustomButton style={{ backgroundColor: "black" }} variant="contained" type='submit'>Signup</CustomButton>
                            </Item>
                        </Grid>
                    </form>
                </Grid>
            </>
        )
    }
}

export default Signup;
