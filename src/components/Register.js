import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [loading,setLoading] = useState(false);
    const [emailErrorMessage,setEmailErrorMessage] = useState(false);
    const [usernameErrorMessage,setUsernameErrorMessage] = useState(false);
    const [validEmail,setValidEmail] = useState(false);
    const [validUsername,setValidUsername] = useState(false);
    const [users,setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const getUsers = async()=>{
        setLoading(true);
        const response = await axios.get('/api/users');
        setUsers(response.data);
        setLoading(false);
    };

    useEffect(()=>{
        getUsers();
    },[]);

    const isValidEmail = emailInput => {
        const foundEmail = users.find(user=>user.email===emailInput);
        if(foundEmail){
            setValidEmail(false);
            setEmailErrorMessage(true);
        }else{
            setValidEmail(true);
            setEmailErrorMessage(false);
        };
    };

    const isValidUsername = usernameInput => {
        const foundUsername = users.find(user=>user.username===usernameInput);
        if(foundUsername){
            setValidUsername(false);
            setUsernameErrorMessage(true);
        }else{
            setValidUsername(true);
            setUsernameErrorMessage(false);
        };
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleEmailChange = (event) => {
        const emailInput = event.target.value.toLowerCase();
        setEmail(emailInput);
        isValidEmail(emailInput);
    };
    const handleUsernameChange = (event) => {
        const usernameInput = event.target.value.toLowerCase();
        setUsername(usernameInput);
        isValidUsername(usernameInput);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const registerUser = async (event) => {
        event.preventDefault();
        if(validEmail && validUsername){
            const body = {
                firstName,
                lastName,
                email,
                username,
                password
            };
            await axios.post('/api/users', body);
            navigate("/login");
        };
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
            {emailErrorMessage && <p style={{color:'red',marginTop:'10px'}}>Sorry, this email is already in use.</p>}
            {usernameErrorMessage && <p style={{color:'red',marginTop:'10px'}}>Sorry, this username is already in use.</p>}
        </div>
    );
};

export default Register;