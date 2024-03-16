

import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  // initial details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  // get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      {/* <h1>Products Details</h1> */}
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height={'300px'}
            width={'250px'}
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="text-center">Producte Details</h1>
          <h6>Name: {product.name} </h6>
          <h6>Description: {product.description} </h6>
          <h6>Price: {product.price} </h6>
          {/* <h6>Category: {product.category.name} </h6> */}
          <button className="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
      <div className="row">Similar Product</div>
    </Layout>
  );
};

export default ProductDetails;
