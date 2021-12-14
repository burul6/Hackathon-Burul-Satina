import React from 'react';
import './ProductList.css';
import { Card } from 'antd';

const { Meta } = Card;

const ProductList = () => {
    return (
        <div>
            <section>
                <div className='our-menu-prodictlist' style={{marginTop:"50px"}}>Our Menu</div>
                <div style={{textAlign:"center", marginTop:'15px', marginBottom:"25px"}}><img src="http://unionagency.one/delice/img/title_sepp_2.png" alt="" /></div>
            </section>
            <section className='allmenu-productlist'>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </section>
        </div>
    );
};

export default ProductList;