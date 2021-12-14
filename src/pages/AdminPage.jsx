import React from "react";
import { Row, Col } from "antd";

const AdminPage = () => {
  return (
    <div className="container" style={{ marginTop: "15px" }}>
      <Row>
        <Col span={12}>
          <Col span={22}>
            <AddProductModal />
            <AdminProductsList />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;
