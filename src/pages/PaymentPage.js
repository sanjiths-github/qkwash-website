import React, { useState } from "react";
import "./PaymentPage.css";
import { FiCheck } from "react-icons/fi"; 
import { Link, useNavigate } from "react-router-dom";

function PaymentPage() {
  const [showPopup, setShowPopup] = useState(true);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const navigate = useNavigate(); // Hook for navigation


  const tableData = [
    { noOfWash: "1x", typeOfWash: "O3 Wash", amount: 125.0 },
    { noOfWash: "1x", typeOfWash: "O3 Wash", amount: 126.0 },
    { noOfWash: "1x", typeOfWash: "O3 Wash", amount: 125.0 },
    { noOfWash: "1x", typeOfWash: "O3 Wash", amount: 125.0 },

    
  ];

  // Calculate total amount
  const totalAmount = tableData.reduce((total, row) => total + row.amount, 0);

  const handlePayment = () => {
    setShowPopup(false); // Hide main popup
    setShowSuccessPopup(true); // Show success popup

    // Automatically hide the success popup after a delay
    setTimeout(() => {
      setShowSuccessPopup(false);
      navigate("/payment-detail"); // Redirect to payment-detail page
    }, 3000); // 3 seconds delay
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="payment-page">
      {/* Main Payment Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            {/* Close Button */}
            <Link to="/Hub-details" className="close-popup" onClick={handleClosePopup}>
              ✖
            </Link>

            {/* Popup Header */}
            <h1 className="popup-title">Mode & Payment Details</h1>
            <p className="popup-subtitle">
              Machine ID : <span className="popup-id">#123456</span>
            </p>

            {/* Table Section */}
            <div className="table-container">
              <div className="table-header">
                <span>No of Wash</span>
                <span>Type Of Wash</span>
                <span>Amount</span>
              </div>
              <hr className="header-divider" />
              <div className="table-content">
                {tableData.map((row, index) => (
                  <div key={index} className="table-row">
                    <span>{row.noOfWash}</span>
                    <span>{row.typeOfWash}</span>
                    <span>{row.amount.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="table-row total-row">
                <span></span>
                <span>Total</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Button */}
            <div className="payment-button-container">
              <button className="payment-button" onClick={handlePayment}>
                Pay ₹{totalAmount.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="success-popup-overlay">
          <div className="success-popup">
            <div className="success-shadow-circle">
              {/* Tick Icon */}
              <FiCheck className="success-icon" />
            </div>
            <h2 className="success-message">Transaction Successful</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
