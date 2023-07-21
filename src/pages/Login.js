import React, { useState } from 'react'
import { useDispatch } from "react-redux";


import { userLogin } from "../redux";
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { styled } from 'styled-components';

const Div = styled.div`
    padding: 2rem;
    border: 1px solid #cdcdcd;
    border-radius: 4px;
    > div{
        > p{
            color: red
        }
    }
`

const Login = () => {
    const navigate = useNavigate()
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [roleField, setRoleField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const dispatch = useDispatch();

    const doLogin = (e) => {
        e.preventDefault();
        console.log("Logging in...", [role, password]);
        dispatch(userLogin({
            role,
            password
        }))
            .then(() => {
                if (!(role === "") && !(password === "")) {
                    navigate('/main')
                }
            })
        if ((role === "")) {
            setRoleField("* Field is required")
        } else if ((password === "")) {
            setPasswordField("* Field is required")
        }
    };

    return (
        <Box
            component="form"
            onSubmit={doLogin}
            noValidate
            sx={{ width: '20%', margin: 'auto', padding: '10rem' }}
        >
            <Div>
                <TextField
                    margin="normal"
                    helperText={roleField}
                    fullWidth
                    onChange={(e) => setRole(e.target.value)}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />

                <TextField
                    margin="normal"
                    helperText={passwordField}
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    label="Password"
                    type='password'
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Log In
                </Button>
            </Div>
        </Box>
    )
};

export default Login;
