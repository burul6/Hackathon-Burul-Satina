import React, { useContext } from 'react';
import { List, Button } from "antd";
import { favoriteContext } from '../../contexts/favoriteContext';

const FavItem = ({item}) => {
    const {deleteFromFav} = useContext(favoriteContext);
    return (
        <div>
           <List.Item
                key={item.id}
                extra={
                    <img
                    style={{width:"250px", height:"200px"}}
                    width={272}
                    alt="image"
                    src={item.item.image}
                    />
                }
            >
           <List.Item.Meta
                title={
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div><h3>{item.item.title} </h3>
                    <h4>{item.item.ingredients}</h4></div>
                    <h3>{"$" + item.item.price}</h3>
                    </div>}
                description={
                <Button onClick={() => deleteFromFav(item.item.id)}>Remove from Favorite</Button>} 
            />
            </List.Item>
        </div>
    );
};

export default FavItem;