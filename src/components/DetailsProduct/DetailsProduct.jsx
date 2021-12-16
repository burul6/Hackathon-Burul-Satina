import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import {Link} from 'react-router-dom'
import { productsContext } from "../../contexts/productsContext";

import { Image, Button, Rate, Tabs } from "antd";
import { LoadingOutlined, HeartFilled } from "@ant-design/icons";

import "./DetailsProduct.css";


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  // console.log('product', product)
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  // like system
  const [like, setLike] = useState(0),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike?-0:1));
      setIsLike(isLike);
    };
    // like system


  return (
    <div className="container" style={{ marginTop: "150px" }}>
      {product ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ width: "35vw" }}>
              <div>
                <Image width="550px" src={product.image} />
              </div>
            </div>
            <div className="detail-info">
              <h2>{product.title}</h2>
              <h4>{product.ingredients}</h4>
              <h3>{product.price}$</h3> 
              <div className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}> {<HeartFilled style={{color: "red", fontSize: "25px"}} />} | {like} </div>
              <Rate
                allowHalf
                defaultValue={4.5}
            />
              <div>
                <Link to="/cart">
                <Button
                  className="btn"
                  size="large"
                  style={{
                    margin: "15px",
                    marginLeft: "-1px",
                    width: "40%",
                    border: "2px solid #be9a67",
                    color: "#fff",
                    background: "black",
                  }}
                >
                  ADD TO CART
                </Button>
                </Link>
                <Button
                  className="btn"
                  size="large"
                  style={{
                    margin: "15px",
                    width: "40%",
                    border: "2px solid #be9a67",
                    color: "#fff",
                    background: "black",
                  }}
                >
                  MY FAVORITE
                </Button>
              </div>
            </div>
          </div>

            <div className="bottom-info" >
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Description" key="1">
                  {product.description}
                </TabPane>
                <TabPane tab="Review" key="2">
                </TabPane>
              </Tabs>
            </div>
         <div>
         <video src={product.video} width="100%" autoPlay loop muted></video>
         </div>
        </>
      ) : (
        <h2>
          <LoadingOutlined style={{display: "flex", alignItems: "center"}}/>
        </h2>
      )}
    </div>
  );
};

export default DetailsProduct;
 