import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminEditProduct = () => {
  const { allProducts } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);
  const [token,setToken] = useState(window.localStorage.getItem('token'));
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  const getProduct = () => {
    const foundProduct = allProducts.filter(
      (product) => product.id === Number(id)
    );
    setProduct(foundProduct);
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

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div>
        {product.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.imageURL} className="singleProductImg" />
              <div className="singleProductText">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>{item.color}</p>
                <button onClick={()=>deleteProduct()}>delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdminEditProduct;