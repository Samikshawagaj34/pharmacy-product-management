import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category: ""
  });

  
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  
  const handleAddProduct = async () => {
    const res = await axios.post("http://localhost:5000/api/products", newProduct);
    setProducts([...products, res.data]);
    setShowModal(false);
    setNewProduct({ name: "", price: "", stock: "", category: "" });
  };

  
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    setProducts(products.filter(p => p._id !== id));
  };

  return (
    <div className="p-4" style={{ marginLeft: "250px" }}>
      <h2 className="mb-3">Manage Products</h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
          
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((prod, index) => (
              <tr key={prod._id}>
                <td>{index + 1}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.stock}</td>
                <td>{prod.category}</td>
                <td>
                  <Button variant="success" size="sm" className="me-2" onClick={() => setShowModal(true)}>
                    Add
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(prod._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted">No products found</td>
            </tr>
          )}
        </tbody>
      </Table>

      
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={newProduct.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control name="price" value={newProduct.price} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control name="stock" value={newProduct.stock} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control name="category" value={newProduct.category} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleAddProduct}>Add Product</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageProducts;
