import React from "react";

const SingleWomenProduct = () => {
  const [product, setProduct] = useState({});
  const { productType, id } = useParams();

  const getProduct = async () => {
    const response = await axios.get(`/api/women/${productType}/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return <div>{product.name}</div>;
};

export default SingleWomenProduct;
