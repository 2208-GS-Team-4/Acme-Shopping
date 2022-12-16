import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { NotFoundPage } from '..';

const AdminHome = () => {
    const { user } = useSelector((state) => state.user);
    const { allProducts } = useSelector((state) => state.product);

    const [Type,setType] = useState('');
    const [Gender,setGender] = useState('');
    const [Name,setName] = useState('');
    const [Color,setColor] = useState('');
    const [Price,setPrice] = useState('');
    const [Description,setDescription] = useState('');

    const [validProductName,setValidProductName] = useState(false);
    const [validProductErrorMessage,setValidProductErrorMessage] = useState(false);

    const isValidProductName = productNameInput => {
        const foundProduct = allProducts.find(product=>product.name===productNameInput);
        if(foundProduct){
            setValidProductName(false);
            setValidProductErrorMessage(true);
        }else{
            setValidProductName(true);
            setValidProductErrorMessage(false);
        };
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    if(!user.isAdmin) return <NotFoundPage />
    return (
        <>
            <h2>Add new product</h2>
            <form onSubmit={addNewProduct}>
                <input required placeholder="Type" onChange={handleTypeChange}/>
                <input required placeholder="Gender" onChange={handleGenderChange}/>
                <input required placeholder="Name" onChange={handleNameChange}/>
                <input required placeholder="Color" onChange={handleColorChange}/>
                <input required placeholder="Price" onChange={handlePriceChange}/>
                <input required placeholder="Description" onChange={handleDescriptionChange}/>
                <button>Add</button>
            </form>
        </>
    );
};

export default AdminHome;