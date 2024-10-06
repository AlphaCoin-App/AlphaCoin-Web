import React from 'react';
import { Button } from '../../components';

const LoginPage = () => {
    return (
        <div>
            <Button
                label="Login"
                onClick={() => {
                    alert('Login button clicked');
                }}
            />

        </div>
    );
};

export default LoginPage

