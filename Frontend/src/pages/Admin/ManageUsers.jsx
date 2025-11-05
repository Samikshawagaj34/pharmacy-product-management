import React, { useEffect, useState } from "react";
import { Table, Spinner } from "react-bootstrap";
import axios from "axios";

const CustomerProfile = ({ userId }) => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/customers/${userId}`);
        setCustomer(res.data);
      } catch (error) {
        console.error("Error fetching customer info:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomer();
  }, [userId]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="p-4" style={{ marginLeft: "250px" }}>
      <h2 className="mb-4">Cutomers list</h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customer ? (
            <tr>
              <td>{customer._id}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>******</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted">
                Customer not found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomerProfile;
