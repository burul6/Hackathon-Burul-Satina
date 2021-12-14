import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { productsContext } from "../../contexts/productsContext";

import { Image, Button, Rate, Tabs } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import "./DetailsProduct.css";


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

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

  // console.log('product', product)

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
                <Image width="100%" src={product.image} />
              </div>
            </div>
            <div className="detail-info">
              <h2>{product.title}</h2>
              <h4>{product.ingredients}</h4>
              <h3>{product.price}$</h3>
              <Rate
                allowHalf
                defaultValue={4.5}
                style={{ marginBottom: "10px" }}
              />
              <div>
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
              {/* <div>{product.description}</div> */}
            </div>
          </div>

          <section>
            <div className="bottom-info" >
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Description" key="1">
                  {product.description}
                </TabPane>
                <TabPane tab="Review" key="2">
                  Content of Tab Pane 2
                </TabPane>
              </Tabs>
            </div>
          </section>

          <video src={product.video} width="100%" autoPlay loop muted></video>
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
