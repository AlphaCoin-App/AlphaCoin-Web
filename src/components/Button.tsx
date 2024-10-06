import React from 'react';

type ButtonProps = {
    label: string;
    onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <button
            className="btn btn-primary"
            type="submit"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
