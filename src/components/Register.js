import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const registerUser = async (event) => {
        event.preventDefault();
        const body = {
            firstName,
            lastName,
            email,
            username,
            password
        };
        await axios.post('/api/users', body);

        // need to redirect to login page after registering
        navigate("/login");
    };

    return (
        <div>
            <h2>Create new account</h2>
            <form onSubmit={registerUser}>
                <input placeholder="First name" onChange={handleFirstNameChange}/>
                <input placeholder="Last name" onChange={handleLastNameChange}/>
                <input placeholder="email" onChange={handleEmailChange}/>
                <input placeholder="Username" onChange={handleUsernameChange}/>
                <input placeholder="Password" onChange={handlePasswordChange}/>
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;