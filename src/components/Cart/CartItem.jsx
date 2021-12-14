import React from 'react';
import { InputNumber, List, Button } from "antd";

const CartItem = () => {
    return (
        <div>
            <List.Item
      extra={
        <img
          width={272}
          alt="image"
        //   src={item.item.image1}
        />
      }
    >
      <List.Item.Meta
        title={
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
             <div><h3> Brand </h3>
              <h4>model</h4></div>
              <h3>price</h3>
            </div>}
        description={<>
        <div> description</div>
        <div>
        <div style={{display:"flex", justifyContent:"space-between", width:"40%", marginTop:"20px"}}>
            <h4>Quality</h4>
                <Button >-</Button>
                <InputNumber  disabled/>
                <Button >+</Button>
            </div>
           <div>
                <h4>SubPrice</h4>
                <h3>subPrice</h3>
            </div>
        </div>
        <Button>Remove from Item</Button>
        </>} 
      />
    </List.Item>
        </div>
    );
};

export default CartItem;