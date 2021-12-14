import React from 'react';
import { List } from "antd";
import CartItem from './CartItem';

const ProductCart = () => {
    return (
        <div>
            <section className='cart-backparalax'>
                <div style={{marginLeft:"50px"}}>
                <h1 style={{fontSize:"32px", fontWeight:"700", marginLeft:"50px", borderBottom:"1px gray solid", width:"1000px"}}>Shopping Cart</h1>
                </div>
                <List style={{borderBottom:"1px gray solid"}}
                    itemLayout="vertical"
                    size="large"
                    // dataSource={}
                    footer={<h2>Total: $</h2>}
                    renderItem={(item) => <CartItem item={item}/>}
                />
            </section>
        </div>
    );
};

export default ProductCart;