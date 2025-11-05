import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/orders");
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-4" style={{ marginLeft: "250px" }}>
      <h2 className="mb-3">Manage Orders</h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer ID</th>
            <th>Medicine ID</th>
            <th>Medicine Name</th>
            <th>Price (₹)</th>
            <th>Quantity</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.customerId}</td>
                <td>{order.medicineId}</td>
                <td>{order.medicineName}</td>
                <td>₹{order.price}</td>
                <td>{order.quantity}</td>
                <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                <td>{order.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center text-muted">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrders;
