import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Image, Rate, Card } from "antd";

import { productsContext } from "../../contexts/productsContext";

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
  return (
    <>
      <div className="container-details" style={{ marginTop: "30px" }}>
        <div>
          <div>
            <Image width="100%" src={product.image} alt="" />
          </div>
          <div>
            <h2>{products.title}</h2>
            <Rate allowHalf defaultValue={2.5} />
            <h3>{product.price}</h3>
            <h4>{product.ingredients}</h4>
            <button>ADD TO CART</button>
            <button>MY FAVORITE</button>
          </div>

          <section className="desc"></section>
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;
