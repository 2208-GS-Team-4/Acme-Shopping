import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { NotFoundPage } from '..';

const AdminHome = () => {
    const { user } = useSelector((state) => state.user);
    const [Type,setType] = useState('');
    const [Gender,setGender] = useState('');
    const [Name,setName] = useState('');
    const [Color,setColor] = useState('');
    const [Price,setPrice] = useState('');
    const [Description,setDescription] = useState('');

    // Need to add event listeners
    // Need to filter the mens and womens products for an
    // already exisiting product name
    

    if(!user.isAdmin) return <NotFoundPage />
    return (
        <>
            <h2>Add new product</h2>
            <form onSubmit={addNewProduct}>
                <input required placeholder="Type" onChange={handleFirstNameChange}/>
                <input required placeholder="Gender" onChange={handleLastNameChange}/>
                <input required placeholder="Name" onChange={handleEmailChange}/>
                <input required placeholder="Color" onChange={handleUsernameChange}/>
                <input required placeholder="Price" onChange={handlePasswordChange}/>
                <input required placeholder="Description" onChange={handlePasswordChange}/>
                <button>Add</button>
            </form>
        </>
    );
};

export default AdminHome;