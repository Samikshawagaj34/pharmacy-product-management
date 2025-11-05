import React, { useEffect, useState } from "react";
import { Card, Row, Col,  ListGroup } from "react-bootstrap";

import axios from "axios";

const DashboardHome = () => {

  const [stats, setStats] = useState({
    products: 0,
    orders:0,
    customers:0,
    recentorders:[],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/");
      setStats(res.data);
    };
    fetchData();
     }, []);

  

  return (
    <div className="p-4" style={{ marginLeft: "250px" }}>
      
      <h2 className="mb-3">Welcome Admin 👋</h2>
      <p className="text-muted">Here’s your business overview for today.</p>

      
      <Row className="mt-4">
        <Col md={3}>
          <Card className="shadow-sm text-center border-0" style={{ backgroundColor: "#e0f7fa" }}>
            <Card.Body>
              <h5>Products</h5>
              <h3>{stats.products}</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow-sm text-center border-0" style={{ backgroundColor: "#fff9c4" }}>
            <Card.Body>
              <h5>Orders</h5>
              <h3>{stats.orders}</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="shadow-sm text-center border-0" style={{ backgroundColor: "#f8bbd0" }}>
            <Card.Body>
              <h5>Customers</h5>
              <h3>{stats.customers}</h3>
            </Card.Body>
          </Card>
        </Col>

        
      </Row>

     
      <div className="mt-5">
        <h4>Recent Activities</h4>
       <ListGroup variant="flush" className="shadow-sm">
  {(stats.recentOrders || []).length > 0 ? (
    (stats.recentOrders || []).map((order, index) => (
      <ListGroup.Item key={index}>
        🛒 Order by <strong>{order.customerName}</strong> for <em>{order.productName}</em> on {order.date}
      </ListGroup.Item>
    ))
  ) : (
    <ListGroup.Item>No recent orders</ListGroup.Item>
  )}
</ListGroup>
      </div>

      
      
    </div>
  );
};

export default DashboardHome;
