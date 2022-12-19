import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { NotFoundPage } from '..';

const AdminAddProduct = () => {
    const { user } = useSelector((state) => state.user);
    const { allProducts } = useSelector((state) => state.product);
    const [token,setToken] = useState(window.localStorage.getItem('token'));

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [color,setColor] = useState('');
    const [price,setPrice] = useState(0);
    const [type,setType] = useState('');
    const [gender,setGender] = useState('');
    
    const [validProductName,setValidProductName] = useState(false);
    const [validProductErrorMessage,setValidProductErrorMessage] = useState(false);
    const [productCreatedMessage,setProductCreatedMessage] = useState(false);

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

    const addNewProduct = async (event) => {
        event.preventDefault();
        if(validProductName){
            const body = {
                name,
                description,
                color,
                price,
                type,
                gender
            };
            await axios.post("/api/products",body,{headers: {Authorization: 'Bearer ' + token}});
            setProductCreatedMessage(true);
        };
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        isValidProductName(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    
    if(user.role!=='admin') return <NotFoundPage />
    return (
        <>
            <h2>Add new product</h2>
            <form onSubmit={addNewProduct}>
                <input required placeholder="Name" onChange={handleNameChange}/>
                <input required placeholder="Description" onChange={handleDescriptionChange}/>
                <input required placeholder="Color" onChange={handleColorChange}/>
                <input required type='number' step='.01' placeholder="Price" onChange={handlePriceChange}/>
                <input required placeholder="Type" onChange={handleTypeChange}/>
                <select onChange={handleGenderChange}>
                    <option value="">-</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                </select>
                <button>Add</button>
            </form>
            {validProductErrorMessage && <p style={{color:'red',marginTop:'10px'}}>Sorry, this product name is already in use.</p>}
            {productCreatedMessage && <p style={{color:'green',marginTop:'10px'}}>Product successfully created.</p>}
        </>
    );
};

export default AdminAddProduct;