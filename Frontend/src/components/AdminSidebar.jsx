
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const AdminSidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#f8f9fa",
        padding: "20px",
        borderRight: "1px solid #dee2e6",
        position: "fixed",
      }}
    >
      <h4 className="mb-4 fw-bold text-center">Admin Dashboard</h4>
      <ListGroup>
        <ListGroup.Item action as={Link} to="/admin/dashboard">
          Admin
        </ListGroup.Item>
        <ListGroup.Item action as={Link} to="/admin/products">
          Products
        </ListGroup.Item>
        <ListGroup.Item action as={Link} to="/admin/orders">
          Orders
        </ListGroup.Item>
        <ListGroup.Item action as={Link} to="/admin/users">
          Cutomers
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AdminSidebar;
