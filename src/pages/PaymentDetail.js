import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './PaymentDetail.css'

const PaymentDetail = () => {
    const [showContinuePopup, setShowContinuePopup] = useState(false);
    const transactionData = {
        transactionId: '#987654321',
        modeOfPayment: 'Credit Card',
        status: 'Complete', 
        date: '2024-12-10',
        time: '10:30 AM',
        totalAmount: '₹500.00'
      };
      const handleContinue = () => {
        setShowContinuePopup(true);
      };

      
    
      return (
        <div className="payment-detail-page">
          <div className="receipt-popup">
            <div className="receipt-header">
              <h2>Payment Receipt</h2>
            </div>
            <div className="receipt-content">
              <div className="receipt-row">
                <span>Transaction ID:</span>
                <span>{transactionData.transactionId}</span>
              </div>
              <div className="receipt-row">
                <span>Mode of Payment:</span>
                <span>{transactionData.modeOfPayment}</span>
              </div>

              <div className="receipt-row">
            <span>Status:</span>
            <span className="status-complete">{transactionData.status}</span>
          </div>
     

              <div className="receipt-row">
                <span>Date:</span>
                <span>{transactionData.date}</span>
              </div>
              <div className="receipt-row">
                <span>Time:</span>
                <span>{transactionData.time}</span>
              </div>
              <div className="receipt-row">
                <span>Total Amount:</span>
                <span>{transactionData.totalAmount}</span>
              </div>
            </div>
            <div className="receipt-footer">
              <Link to="" className="continue-button" onClick={handleContinue}>Continue</Link>
            </div>
          </div>

          {showContinuePopup && (
            <div className="continue-popup-overlay">
              <div className="continue-popup">
                <h2>Load Your Clothes</h2>
                <p>Apply washing liquid, close the door.</p>
                <Link to="/Home" className="start-button" >
                  Start
                </Link>
              </div>
            </div>
          )}

        </div>
      );
    }

export default PaymentDetail
