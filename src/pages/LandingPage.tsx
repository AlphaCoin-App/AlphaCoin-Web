import React from 'react';
import { Button, Header } from '../components';
import { Stack } from '@mui/material';


const LandingPage = () => {
    return (
        <Stack>
            <Header/>
            <h1>Landing Page</h1>
            <Button
                label="Login"
                onClick={() => {
                    alert('Login button clicked');
                }}
            />
        </Stack>
    );
};

export default LandingPage;
