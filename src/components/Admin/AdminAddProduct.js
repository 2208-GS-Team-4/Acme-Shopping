import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { NotFoundPage } from "..";
import {
  setAllMensProducts,
  setAllWomensProducts,
} from "../../store/productSlice";

const AdminAddProduct = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { allProducts } = useSelector((state) => state.product);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  const [validProductName, setValidProductName] = useState(false);
  const [validProductErrorMessage, setValidProductErrorMessage] =
    useState(false);
  const [productCreatedMessage, setProductCreatedMessage] = useState(false);

  const isValidProductName = (productNameInput) => {
    const foundProduct = allProducts.find(
      (product) => product.name === productNameInput
    );
    if (foundProduct) {
      setValidProductName(false);
      setValidProductErrorMessage(true);
    } else {
      setValidProductName(true);
      setValidProductErrorMessage(false);
    }
  };

  const addNewProduct = async (event) => {
    event.preventDefault();
    if (validProductName) {
      const body = {
        name,
        description,
        color,
        price,
        type,
        gender,
      };
      await axios.post("/api/products", body, {
        headers: { Authorization: "Bearer " + token },
      });
      if (gender === "men") {
        const allMensProducts = await axios.get("/api/men");
        dispatch(setAllMensProducts(allMensProducts.data));
      } else {
        const allWomensProducts = await axios.get("/api/women");
        dispatch(setAllWomensProducts(allWomensProducts.data));
      }
      setProductCreatedMessage(true);
    }
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

  if (user.role !== "admin") return <NotFoundPage />;
  return (
    <>
      <div className="sideMenu">
        <Link to="/admin/add-product">Add a New Product</Link>
        <Link to="/men">Men's</Link>
        <Link to="/women">Women's</Link>
        <Link to="/admin/view-users">Users</Link>
      </div>
      <div className="dashboard">
        <h1>Add new product</h1>
        <form onSubmit={addNewProduct} className="newProductForm">
          <input required placeholder="Name" onChange={handleNameChange} />
          <input required placeholder="Color" onChange={handleColorChange} />
          <input
            required
            type="number"
            step=".01"
            placeholder="Price"
            onChange={handlePriceChange}
          />
          <input required placeholder="Type" onChange={handleTypeChange} />
          <select onChange={handleGenderChange}>
            <option value="">-</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
          <textarea
            required
            placeholder="Description"
            onChange={handleDescriptionChange}
          />

          <button className="addNew">Add</button>
        </form>
        {validProductErrorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>
            Sorry, this product name is already in use.
          </p>
        )}
        {productCreatedMessage && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Product successfully created.
          </p>
        )}
      </div>
    </>
  );
};

export default AdminAddProduct;
