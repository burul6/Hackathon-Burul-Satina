import React from 'react';

import { List, Avatar, Pagination } from "antd";
import { Link, useSearchParams } from "react-router-dom";

import { productsContext } from "../../contexts/productsContext";

const AdminProductsList = () => {
    const { getProducts, deleteProduct, products, productsTotalCount } =
    useContext(productsContext);
    return (
        <>
            <List
        className="demo-loadmore-list items-list"
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a
                key="list-loadmore-edit"
                onClick={() => deleteProduct(item.id)}
              >
                delete
              </a>,
              <Link to={`/edit/${item.id}`}>edit</Link>,
              <Link to={`/products/${item.id}`}>more</Link>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={
                <a>
                  {item.brand}, {item.model}
                </a>
              }
            />
          </List.Item>
        )}
      />
        </>
    );
};

export default AdminProductsList;