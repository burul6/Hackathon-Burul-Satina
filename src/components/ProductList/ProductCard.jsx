import React from 'react';
import {Card} from 'antd';
import { Link } from 'react-router-dom';
import {
    ShoppingCartOutlined,
    EllipsisOutlined,
    StarOutlined,
  } from "@ant-design/icons";
  import './ProductCard.css';

const ProductCard = ({item}) => {
    // const {addProductToCart, checkItemInCart} = useContext(cartContext); 
    // const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
    // useEffect(() => {
    //   setCheckInCart(setCheckInCart(item.id))
    // })
    return (
        <div>
            <Card
            hoverable
            // key={item.id}
            style={{ width: "250px", margin: "10px" }}
            cover={<img style={{width:"250px", height:"200px"}} alt="example" src={item.image} />}
            actions={[
              <StarOutlined style={{ color: "black", fontSize: "25px" }} />,
              <ShoppingCartOutlined
                style={{ color: "black", fontSize: "25px" }}
                //  onClick={() => { 
                //      addProductToCart(item); 
                //      setCheckInCart(checkItemInCart(item.id));
                // }}
              />,
              <Link to={`/products/${item.id}`}>
                <EllipsisOutlined
                  style={{ color: "black", fontSize: "25px" }}
                  key="ellipsis"
                />
              </Link>,
            ]}
          >
            <Card.Meta
              title={<h3 className='productCard-title'>{item.title}</h3>}
              description={
                <>
                  <h3>{item.ingredients}</h3>
                  <h2 className='productCard-price' style={{color:"#be9a67"}}>{"$" + item.price}</h2>
                </>
              }
            />
          </Card>
        </div>
    );
};

export default ProductCard;