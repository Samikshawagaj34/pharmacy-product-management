import React, { useState } from "react";
import { Button, Toast, ToastContainer } from "react-bootstrap";
import axios from "axios";

const AddToCart = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastBg, setToastBg] = useState("success");

  
  const showCustomToast = (message, bg) => {
    setToastMessage(message);
    setToastBg(bg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1200);
  };

  
  const handleAdd = async () => {
    try {
      const newQty = quantity + 1;
      setQuantity(newQty);

      await axios.post("http://localhost:5000/api/cart/add", {
        userId: 1, 
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: newQty,
      });

      showCustomToast(" Added to Cart", "success"); 
    } catch (err) {
      console.error(err);
      showCustomToast("Failed to Add", "danger");
    }
  };

  
  const handleSubtract = async () => {
    if (quantity > 0) {
      const newQty = quantity - 1;
      setQuantity(newQty);

      try {
        await axios.post("http://localhost:5000/api/cart/remove", {
          userId: 1,
          productId: product._id,
          quantity: newQty,
        });
        showCustomToast(" Removed 1 Item", "danger"); 
      } catch (err) {
        console.error(err);
        showCustomToast("Failed to Remove", "warning");
      }
    }
  };

  return (
    <>
      {quantity === 0 ? (
        <Button variant="success" className="w-100" onClick={handleAdd}>
          Add to Cart
        </Button>
      ) : (
        <div
          className="d-flex justify-content-between align-items-center rounded px-3 py-1"
          style={{
            backgroundColor: "#004d40",
            color: "white",
            fontWeight: "bold",
            minWidth: "150px",
          }}
        >
          <Button
            variant="success"
            size="sm"
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={handleSubtract}
          >
            −
          </Button>
          <span>{quantity}</span>
          <Button
            variant="success"
            size="sm"
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={handleAdd}
          >
            +
          </Button>
        </div>
      )}

     
      <ToastContainer position="top-right" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={1200}
          autohide
          style={{
            backgroundColor:
              toastBg === "success"
                ? "#28a745" 
                : toastBg === "danger"
                ? "#dc3545" 
                : "#ffc107", 
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default AddToCart;
