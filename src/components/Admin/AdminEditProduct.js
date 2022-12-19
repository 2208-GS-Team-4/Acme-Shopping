import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link,useParams,useNavigate } from "react-router-dom";
import { NotFoundPage } from '..';

const AdminEditProduct = () => {
    // Redux variables
    const { allProducts } = useSelector((state) => state.product);
    const { user } = useSelector((state) => state.user);

    // User variables
    const [token,setToken] = useState(window.localStorage.getItem('token'));

    // Form variables
    const [productUpdatedMessage,setProductUpdatedMessage] = useState(false);

    // Product variables
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [name, setName] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [gender, setGender] = useState('');

    // Other variables
    const navigate = useNavigate();

    const getProduct = () => {
        let foundProduct = allProducts.filter(product => product.id === Number(id));
        foundProduct = foundProduct[0];
        setProduct(foundProduct);
        setName(foundProduct.name);
        setDescription(foundProduct.description);
        setColor(foundProduct.color);
        setPrice(foundProduct.price);
        setType(foundProduct.type);
        setGender(foundProduct.gender);
        setImageURL(foundProduct.imageURL);
    };

    const updateProduct = async (event) =>{
        event.preventDefault();
        const body = {
            name,
            description,
            color,
            price,
            type,
            gender,
            imageURL
        };
        await axios.put(`/api/products/${id}`, body,{headers: {Authorization: 'Bearer ' + token}});
        setProductUpdatedMessage(true);
    };

    const deleteProduct = async() =>{
        try{
            // will probably have to delete this product from the front end using Redux and store
            await axios.delete(`/api/products/${id}`,{headers: {Authorization: 'Bearer ' + token}});
            navigate("/admin");
        }catch(error){
            console.log(error);
        };
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
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

    useEffect(() => {
        getProduct();
    }, []);

    if(user.role!=='admin') return <NotFoundPage />
    return (
        <>
            <img src={imageURL} className="singleProductImg" />
            <div className="singleProductText">
                <form onSubmit={updateProduct}>
                    <input require value={name} onChange={handleNameChange}/>
                    <input require value={description} onChange={handleDescriptionChange}/>
                    <input require value={color} onChange={handleColorChange}/>
                    <input require value={price} type='number' step='.01' onChange={handlePriceChange}/>
                    <input require value={type} onChange={handleTypeChange}/>
                    <input require value={gender} onChange={handleGenderChange}/>
                    <button>Save</button>
                </form>
                {productUpdatedMessage && <p style={{color:'green',marginTop:'10px'}}>Product successfully updated.</p>}
                <button onClick={()=>deleteProduct()}>Delete</button>
            </div>
        </>
    );
};

export default AdminEditProduct;