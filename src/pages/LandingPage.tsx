import React from 'react';
import { Button } from '../components';

const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <Button
                label="Login"
                onClick={() => {
                    alert('Login button clicked');
                }}
            />
        </div>
    );
};

export default LandingPage;
